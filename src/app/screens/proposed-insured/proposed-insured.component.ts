import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { attributes } from '../all-attributes'
@Component({
  selector: 'app-proposed-insured',
  templateUrl: './proposed-insured.component.html',
  styleUrls: ['./proposed-insured.component.css']
})
export class ProposedInsuredComponent implements OnInit {
  @Input() selectedScreen : String;
  proposedInsured: FormGroup;
  constructor(private fb: FormBuilder) { }
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

  }


  saveDetails() {
    event.preventDefault();
    Object.keys(this.proposedInsured.controls).forEach(key => {
      let value = this.proposedInsured.get(key).value;
      attributes.forEach(function (data) {
        if (data.name == key) {
          //console.log(key+' '+value);
          data.value = value;
          //console.log('attributes value  ' + data.value);
        }
      });
    })
    console.log('Proposed Insure details saved');
  }

  getDetails(propInsured: FormGroup) {
    let proposedInsuredMap = new Map();
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
    })
  }

}
