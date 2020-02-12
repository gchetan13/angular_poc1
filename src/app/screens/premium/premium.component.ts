import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import {attributes} from '../all-attributes'
import { ScreenServiceService } from 'src/app/services/screen-service.service';

@Component({
  selector: 'app-premium',
  templateUrl: './premium.component.html',
  styleUrls: ['../css/all-screens.css']
})
export class PremiumComponent implements OnInit {
  premium_payors = ["Proposed Insured","Payor","Owner"];
  paymentModes = ["Single Payment","Annual","Semi-Annual","Quarterely","Monthly"];
  premium : FormGroup;
  @Output() prevScreen = new EventEmitter<String>();
  constructor(private fb:FormBuilder,private service:ScreenServiceService) { }

  ngOnInit() {
    this.premium = this.fb.group({
      premium_payors: ['',Validators.required],
      paymentMode: ['',Validators.required],
  /*     wireTransfer: ['',Validators.required],
      bankDraft: ['',Validators.required],
      check: ['',Validators.required] */
  });
  this.getDetails(this.premium);
  const observable = this.service.getPremiumServerError();
    const observer = {
      next: x => {this.premiumErrors=x}
      }
    
    observable.subscribe(observer);

  }

saveDetails() {
  event.preventDefault();
/*   console.log('Using JSON ');  
  console.log(JSON.stringify(this.premium.value));
  Object.keys(this.premium.controls).forEach(key => {
    let value = this.premium.get(key).value;
    attributes.forEach(function (data) {
      if (data.name == key) {
        //console.log(key+' '+value);
        data.value = value;
        console.log('attributes value  ' + data.value);
      }
    });
  }) */
    this.service.postPremium(JSON.parse(JSON.stringify(this.premium.value))).subscribe();
    this.logValidationError(this.premium);
}

getDetails(propInsured: FormGroup) {
  /* let premiumMap = new Map();
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
  }) */
  const observable = this.service.getPremium();
  const observer ={
    next:x=> {this.premium.patchValue({
      premium_payors: x.premium_payors,
      paymentMode: x.paymentMode
    }) }
  }
  observable.subscribe(observer);
}
onPrev(){
  let value = "existing-applied";
  this.prevScreen.emit(value);
}
validationMessages={
  'premium_payors': 'Premium Payor is missing.',
  'paymentMode': 'Payment Mode is missing.'
}
premiumErrors={
  'premium_payors': '',
  'paymentMode': ''
}
logValidationError(group:FormGroup){
  Object.keys(group.controls).forEach((
    key :string) =>{
      const abstractcontrol = group.get(key);
      
      this.premiumErrors[key]='';
      if(abstractcontrol && !abstractcontrol.valid){
        this.premiumErrors[key]=this.validationMessages[key];
      }
    }
  )

  this.service.postGettingStartedServerError(JSON.parse(JSON.stringify(this.premiumErrors))).subscribe();
}
}
