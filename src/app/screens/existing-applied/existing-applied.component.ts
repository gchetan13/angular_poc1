import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import {attributes} from '../all-attributes'

@Component({
  selector: 'app-existing-applied',
  templateUrl: './existing-applied.component.html',
  styleUrls: ['./existing-applied.component.css']
})
export class ExistingAppliedComponent implements OnInit {
  existingOrApplied : FormGroup;
  constructor(private fb:FormBuilder) { }
  prefixes = ["commander","Doctor","Mr.","Ms","Mrs.","General"];
  ngOnInit() {
    this.existingOrApplied = this.fb.group({
      a_InforceNAppliedfor: ['',Validators.required],
      a_OffPaymtInd_PINS: ['',Validators.required],
      a_OwnSoldTransLifeInd: ['',Validators.required],
  });
  this.getDetails(this.existingOrApplied);
  }
  
saveDetails() {
  event.preventDefault();
  Object.keys(this.existingOrApplied.controls).forEach(key => {
    let value = this.existingOrApplied.get(key).value;
    attributes.forEach(function (data) {
      if (data.name == key) {
        //console.log(key+' '+value);
        data.value = value;
        console.log('attributes value  ' + data.value);
      }
    });
  })
  console.log('existingOrApplied details saved');
}

getDetails(propInsured: FormGroup) {
  let existingOrAppliedMap = new Map();
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
  })
}

}
