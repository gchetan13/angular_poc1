import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import {attributes} from '../all-attributes';
import { ScreenServiceService } from 'src/app/services/screen-service.service';

@Component({
  selector: 'app-existing-applied',
  templateUrl: './existing-applied.component.html',
  styleUrls: ['../css/all-screens.css']
})
export class ExistingAppliedComponent implements OnInit {
  existingOrApplied : FormGroup;
  @Output() nextScreen = new EventEmitter<String>();
  @Input('isOwner') isOwner : boolean;
  constructor(private fb:FormBuilder, private service: ScreenServiceService) { }
  prefixes = ["commander","Doctor","Mr.","Ms","Mrs.","General"];
  ngOnInit() {
    this.existingOrApplied = this.fb.group({
      a_InforceNAppliedfor: ['',Validators.required],
      a_OffPaymtInd_PINS: ['',Validators.required],
      a_OwnSoldTransLifeInd: ['',Validators.required],
  });
  this.getDetails(this.existingOrApplied);

  const observable = this.service.getexistingAppliedServerError();
  const observer = {
    next: x => {this.existingAppliedErrors=x}
    }
  
  observable.subscribe(observer);

}
  
saveDetails() {
  event.preventDefault();
/*   console.log('Using JSON ');  
  console.log(JSON.stringify(this.existingOrApplied.value));
  Object.keys(this.existingOrApplied.controls).forEach(key => {
    let value = this.existingOrApplied.get(key).value;
    attributes.forEach(function (data) {
      if (data.name == key) {
        //console.log(key+' '+value);
        data.value = value;
        console.log('attributes value  ' + data.value);
      }
    });
  }) */
  this.service.postExistingApplied(JSON.parse(JSON.stringify(this.existingOrApplied.value))).subscribe();
  
  this.logValidationError(this.existingOrApplied);
}

getDetails(propInsured: FormGroup) {
/*   let existingOrAppliedMap = new Map();
  Object.keys(propInsured.controls).forEach(key => {
    //let  value = this.gettingStarted.get(key).value;
    attributes.forEach(function (data) {
      if (data.name == key) {
        //console.log(data.name + ' ' + data.value);
        existingOrAppliedMap.set(data.name, data.value);
      }
    });
  })
  this.existingOrApplied.patchValue({
    a_InforceNAppliedfor: existingOrAppliedMap.get("a_InforceNAppliedfor"),
    a_OffPaymtInd_PINS: existingOrAppliedMap.get("a_OffPaymtInd_PINS"),
    a_OwnSoldTransLifeInd: existingOrAppliedMap.get("a_OwnSoldTransLifeInd")
  }) */
  const observable = this.service.getExistingApplied();
  const observer = {
    next: x => {
      this.existingOrApplied.patchValue({
        a_InforceNAppliedfor: x.a_InforceNAppliedfor,
        a_OffPaymtInd_PINS: x.a_OffPaymtInd_PINS,
        a_OwnSoldTransLifeInd: x.a_OwnSoldTransLifeInd
      });

    }
  }
  observable.subscribe(observer);
}
onNext(){
  this.nextScreen.emit('premium');
}
onPrev(){
  let value = "existing-applied";
  if(this.isOwner){
    value = "owner";
  }
  else{
    value = "proposed-insured";
  }
  this.nextScreen.emit(value);
}
validationMessages={
  "a_InforceNAppliedfor": "Answer to Proposed Insured have any existing or applied for life insurance or annuities is required.",
  "a_OffPaymtInd_PINS": "Answer to Proposed Insured been offered any fee,payment,or incentive in connection with the purchase of this insurance is required.",
  "a_OwnSoldTransLifeInd": "Answer to sold or transferred a life insurance policy to a life settlement company, other secondary market provider, or any other person is required."
};
existingAppliedErrors={
  "a_InforceNAppliedfor": "",
  "a_OffPaymtInd_PINS": "",
  "a_OwnSoldTransLifeInd": ""
};
logValidationError(group:FormGroup){
  Object.keys(group.controls).forEach((
    key :string) =>{
      const abstractcontrol = group.get(key);
      
      this.existingAppliedErrors[key]='';
      if(abstractcontrol && !abstractcontrol.valid){
        this.existingAppliedErrors[key]=this.validationMessages[key];
      }
    }
  )
  this.service.postexistingAppliedServerError(JSON.parse(JSON.stringify(this.existingAppliedErrors))).subscribe();
}
}
