import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import {attributes} from '../all-attributes'

@Component({
  selector: 'app-premium',
  templateUrl: './premium.component.html',
  styleUrls: ['./premium.component.css']
})
export class PremiumComponent implements OnInit {
  premium_payors = ["Proposed Insured","Payor","Owner"];
  paymentModes = ["Single Payment","Annual","Semi-Annual","Quarterely","Monthly"];
  premium : FormGroup;
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.premium = this.fb.group({
      premium_payors: ['',Validators.required],
      paymentMode: ['',Validators.required],
  /*     wireTransfer: ['',Validators.required],
      bankDraft: ['',Validators.required],
      check: ['',Validators.required] */
  });
  this.getDetails(this.premium);
  }

saveDetails() {
  event.preventDefault();
  Object.keys(this.premium.controls).forEach(key => {
    let value = this.premium.get(key).value;
    attributes.forEach(function (data) {
      if (data.name == key) {
        //console.log(key+' '+value);
        data.value = value;
        console.log('attributes value  ' + data.value);
      }
    });
  })
  console.log('Premium details saved');
}

getDetails(propInsured: FormGroup) {
  let premiumMap = new Map();
  Object.keys(propInsured.controls).forEach(key => {
    //let  value = this.gettingStarted.get(key).value;
    attributes.forEach(function (data) {
      if (data.name == key) {
        //console.log(data.name + ' ' + data.value);
        premiumMap.set(data.name, data.value);
      }
    });
  })
  this.premium.patchValue({
    premium_payors: premiumMap.get("premium_payors"),
    paymentMode: premiumMap.get("paymentMode")
  })
}

}
