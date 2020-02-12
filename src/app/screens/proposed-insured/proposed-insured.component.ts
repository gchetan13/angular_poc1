import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { attributes } from '../all-attributes';
import { ScreenServiceService } from 'src/app/services/screen-service.service';
@Component({
  selector: 'app-proposed-insured',
  templateUrl: './proposed-insured.component.html',
  styleUrls: ['../css/all-screens.css']
})
export class ProposedInsuredComponent implements OnInit {
  @Input() selectedScreen: String;
  @Output() prevScreen = new EventEmitter<String>();
  @Output() nextScreen = new EventEmitter<String>();
  @Input('isOwner') isOwner : boolean;
  proposedInsured: FormGroup;
  constructor(private fb: FormBuilder, private service: ScreenServiceService) { }
  prefixes = ["commander", "Doctor", "Mr.", "Ms", "Mrs.", "General"];
  ngOnInit() {
    this.proposedInsured = this.fb.group({
      prefix: [''],
      firstName: ['', Validators.required],
      middleName: ['', Validators.maxLength(1)],
      lastName: ['', Validators.required],
      permanentAddress: ['', Validators.required],
      dateofBirth: ['', Validators.required],
      ssn: ['', Validators.required]
    });
    this.getDetails(this.proposedInsured);
    const observable = this.service.getProposed_InsuredServerError();
    const observer = {
      next: x => {this.proposedInsuredErrors=x}
      }
    
    observable.subscribe(observer);
  }
  invalidDate  : {}
  validatedate(date : String){
    //console.log(this.ownersArray.at(index).get("dateofBirth").value);
    let year = parseInt(date.split("-")[0]);
    if(year<1900 || year >2099){
      // console.log('Please enter a valid date')
      
      this.invalidDate = "Please enter a valid date";
    }
    else{
      this.invalidDate = "";
    }
  }

  saveDetails() {
    event.preventDefault();
/*     console.log('Using JSON ');
    console.log(JSON.stringify(this.proposedInsured.value));
    Object.keys(this.proposedInsured.controls).forEach(key => {
      let value = this.proposedInsured.get(key).value;
      attributes.forEach(function (data) {
        if (data.name == key) {
          //console.log(key+' '+value);
          data.value = value;
          //console.log('attributes value  ' + data.value);
        }
      });
    }) */
    this.service.postProposedInsured(JSON.parse(JSON.stringify(this.proposedInsured.value))).subscribe();
    this.logValidationError(this.proposedInsured);
  }

  getDetails(propInsured: FormGroup) {
    /* let proposedInsuredMap = new Map();
    Object.keys(propInsured.controls).forEach(key => {
      //let  value = this.gettingStarted.get(key).value;
      attributes.forEach(function (data) {
        if (data.name == key) {
          //console.log(data.name + ' ' + data.value);
          proposedInsuredMap.set(data.name, data.value);
        }
      });
    })
    this.proposedInsured.patchValue({
      prefix: proposedInsuredMap.get("prefix"),
      firstName: proposedInsuredMap.get("firstName"),
      middleName: proposedInsuredMap.get("middleName"),
      lastName: proposedInsuredMap.get("lastName"),
      permanentAddress: proposedInsuredMap.get("permanentAddress"),
      dateofBirth: proposedInsuredMap.get("dateofBirth"),
      ssn: proposedInsuredMap.get("ssn"),
    }) */
    const observable = this.service.getProposedInsured();
    const observer = {
      next: x => {
        this.proposedInsured.patchValue({
          prefix: x.prefix,
          firstName: x.firstName,
          middleName: x.middleName,
          lastName: x.lastName,
          permanentAddress: x.permanentAddress,
          dateofBirth: x.dateofBirth,
          ssn: x.ssn
        });

      }
    }
    observable.subscribe(observer);

  }
  onPrev(){
    let value = "getting-started";
    this.prevScreen.emit(value);
  }
  onNext(){
    let value= "proposed-insured";
    if(this.isOwner){
      value = "owner";
    }
    else{
      value = "existing-applied"
    }
    this.nextScreen.emit(value);
  }
  validationMessages= {
    "firstName": "First Name is required.",
    "lastName": "Last Name is required.",
    "permanentAddress": "Permanent Address is required.",
    "dateofBirth": "Date of birth is required.",
    "ssn": "SSN is required."
  }
  proposedInsuredErrors= {
    "firstName": "",
    "lastName": "",
    "permanentAddress": "",
    "dateofBirth": "",
    "ssn": ""
  }
  logValidationError(group:FormGroup){
    Object.keys(group.controls).forEach((
      key :string) =>{
        const abstractcontrol = group.get(key);
        
        this.proposedInsuredErrors[key]='';
        if(abstractcontrol && !abstractcontrol.valid){
          this.proposedInsuredErrors[key]=this.validationMessages[key];
        }
      }
    )
    this.service.postProposed_InsuredServerError(JSON.parse(JSON.stringify(this.proposedInsuredErrors))).subscribe();
  }
}