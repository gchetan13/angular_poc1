import { Component, OnInit, Output, EventEmitter, Input,OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { CurrencyPipe } from '@angular/common'
import { of, Observable } from 'rxjs';
import {attributes} from  '../all-attributes';
import { attribute } from '../attribute';
import { NgOnChangesFeature } from '@angular/core/src/render3';
@Component({
  selector: 'app-getting-started',
  templateUrl: './getting-started.component.html',
  styleUrls: ['./getting-started.component.css']
})

export class GettingStartedComponent implements OnInit {

  gettingStarted: FormGroup;
@Input() selectedScreen : String;
  formerrors: {}
  ngOnInit() {
    this.gettingStarted = this.fb.group({
      Application_CRDA: ['', Validators.required],
      appcompletedinUS: ['', Validators.required],
      ownerOtherThanPI: ['', Validators.required],
      product: ['', Validators.required],
      niprNum: ['', Validators.required],
      preAmount: [''],
      faceAmount: [''],
      illustrationPDF: ['', Validators.required],
      premiumMode: ['', Validators.required],
      lumpsum: ['', Validators.required],
      singlePremium: ['', Validators.required],

    });
    this.gettingStarted.get("Application_CRDA").valueChanges.subscribe(data => { this.validateGettingStarted(data) });
    //this.validateGettingStarted(data);
    this.getDetails(this.gettingStarted);
  }

  constructor(private fb: FormBuilder, private currency: CurrencyPipe) { }
  @Output() PIotherThanOwn = new EventEmitter<String>();
  premiumModes = ["Single Payment", "Annual", "Semi-Annual", "Quarterely", "Monthly"];
  maskAppCRDA = [/\d/, /\d/, /\d/, /\d/, '-', /[0-1]/, /\d/, '-', /[0-3]/, /\d/, '-', /[0-5]/, /\d/, '-', /[A-Za-z0-9]/, /[A-Za-z0-9]/, /[A-Za-z0-9]/, /[A-Za-z0-9]/, 'C01']
/*   ngOnChanges(changes: SimpleChanges): void {
   console.log('selected screen  ' +this.selectedScreen);
   console.log('changes  ' +changes);
   if((this.selectedScreen == "getting-started")){
    console.log('in Getting Started '+this.selectedScreen);
   //this.saveDetails();
   }
  } */
  showHideOwner(value: String) {

    this.PIotherThanOwn.emit(value);
  }
  validateGettingStarted(data: String) {
    if (data == "") {
      this.formerrors = "Application CRDA is missing.";
    }
    else if (data.includes("_")) {
      data = "";
      this.formerrors = "Application CRDA is missing.";
    }
    else {
      this.formerrors = "";
    }
  }
  showHideAmount(event: any) {
    console.log(event.target.value);
    if (event.target.value == "Yes") {

      this.gettingStarted.addControl('lumpsum', new FormControl('', Validators.required));
      this.gettingStarted.addControl('singlePremium', new FormControl('', Validators.required));
      //  this.gettingStarted.controls['lumpsum'].reset();
      // this.gettingStarted.controls['singlePremium'].reset();

    }
    else {

      this.gettingStarted.removeControl('lumpsum');
      this.gettingStarted.removeControl('singlePremium');
    }
  }
  formateCurrency(event: HTMLInputElement) {
    let formctrlname = event.getAttribute("formControlName");
    let amount = parseInt(event.value.replace(/[^0-9.-]+/g,"")); 
    switch (formctrlname) {
      case "preAmount": {
        this.gettingStarted.patchValue({
          preAmount: this.currency.transform(amount, 'USD')
        });
        break;
      }
      case "faceAmount": {
        this.gettingStarted.patchValue({
          faceAmount: this.currency.transform(amount, 'USD')
        });
        break;
      }
      case "lumpsum": {
        this.gettingStarted.patchValue({
          lumpsum: this.currency.transform(amount, 'USD')
        });
        break;
      }
      case "singlePremium": {
        this.gettingStarted.patchValue({
          singlePremium: this.currency.transform(amount, 'USD')
        });
        break;
      }
    }
  }
  saveDetails(){
    //event.preventDefault();  
    Object.keys(this.gettingStarted.controls).forEach(key =>{
      let  value = this.gettingStarted.get(key).value;
        attributes.forEach(function(data){
          if(data.name == key){
            //console.log(key+' '+value);
            data.value = value; 
            //console.log('attributes value  '+data.value);
          }        
        }); 
      })
      console.log('getting started details saved');
  }

  getDetails(gettStarted : FormGroup){
    let gettingstartedMap = new Map();
    Object.keys(gettStarted.controls).forEach(key =>{
      //let  value = this.gettingStarted.get(key).value;
        attributes.forEach(function(data){
          if(data.name == key){
            //console.log(data.name+' '+data.value);
            gettingstartedMap.set(data.name,data.value);
          }        
        }); 
      })
      this.gettingStarted.patchValue({
        Application_CRDA : gettingstartedMap.get("Application_CRDA"),
        appcompletedinUS : gettingstartedMap.get("appcompletedinUS"),
        ownerOtherThanPI : gettingstartedMap.get("ownerOtherThanPI"),
        product : gettingstartedMap.get("product"),
        premiumMode : gettingstartedMap.get("premiumMode"),
        niprNum : gettingstartedMap.get("niprNum"),
        preAmount : gettingstartedMap.get("preAmount"),
        faceAmount : gettingstartedMap.get("faceAmount"),
        illustrationPDF : gettingstartedMap.get("illustrationPDF"),
        singlePremium : gettingstartedMap.get("singlePremium"),
        lumpsum : gettingstartedMap.get("lumpsum")
      })
  }
}
