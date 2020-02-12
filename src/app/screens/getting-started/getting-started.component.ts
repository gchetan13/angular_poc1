import { Component, OnInit, Output, EventEmitter, Input,OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { CurrencyPipe, JsonPipe } from '@angular/common';
import { ScreenServiceService } from 'src/app/services/screen-service.service';

@Component({
  selector: 'app-getting-started',
  templateUrl: './getting-started.component.html',
  styleUrls: ['../css/all-screens.css'],
})

export class GettingStartedComponent implements OnInit {

  gettingStarted: FormGroup;
@Input() selectedScreen : String;
  formerrors: {};
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
/*     this.gettingStarted.valueChanges.subscribe(() => {
      this.logValidationError(this.gettingStarted);
    }) */
    this.getDetails(this.gettingStarted);
    //this.logValidationError(this.gettingStarted);
    this.gettingStarted.get("illustrationPDF").valueChanges.subscribe(
      data => {
      if(data != "Yes"){
        this.gettingStarted.removeControl('singlePremium');
        this.gettingStarted.removeControl('lumpsum'); 
      }
      else {
        this.gettingStarted.addControl('singlePremium',new FormControl('', Validators.required));
        this.gettingStarted.addControl('lumpsum',new FormControl('', Validators.required)); 
      }

      }); 
    const observable = this.service.getGettingStartedServerError();
    const observer = {
      next: x => {this.gettingstartedErrors=x}
      }
    
    observable.subscribe(observer);

  }

  constructor(private fb: FormBuilder, private currency: CurrencyPipe,private service : ScreenServiceService) { }
  @Output() PIotherThanOwn = new EventEmitter<String>();
  @Output() nextScreen = new EventEmitter<String>();
  premiumModes = ["Single Payment", "Annual", "Semi-Annual", "Quarterely", "Monthly"];
  maskAppCRDA = [/\d/, /\d/, /\d/, /\d/, '-', /[0-1]/, /\d/, '-', /[0-3]/, /\d/, '-', /[0-5]/, /\d/, '-', /[A-Za-z0-9]/, /[A-Za-z0-9]/, /[A-Za-z0-9]/, /[A-Za-z0-9]/, 'C01']

  showHideOwner(value: String) {

    this.PIotherThanOwn.emit(value);
  }
  validateGettingStarted(data: String) {
    if (data == "") {
      this.formerrors = "Application CRDA is missing.";
    }
/*     else if (data.includes("_")) {
      data = "";
      this.formerrors = "Application CRDA is missing.";
    } */
    else {
      this.formerrors = "";
    }
  }
  showHideAmount(event: any) {
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
/*     console.log(JSON.stringify(this.gettingStarted.value));
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
       */
    // const gettingstartedObservable = of(JSON.stringify(this.gettingStarted.value));
  //  console.log('getting started value  '+JSON.parse(JSON.stringify(this.gettingStarted.value)));
     this.service.postGettingStarted(JSON.parse(JSON.stringify(this.gettingStarted.value))).subscribe();
     
   //  console.log('getting started value '+JSON.stringify(this.gettingStarted.get('illustrationPDF').value));
/*      if(this.gettingStarted.get('illustrationPDF').value != "Yes"){
       
       this.gettingStarted.removeControl('singlePremium');
       this.gettingStarted.removeControl('lumpsum');
      console.log('control removed');
      } */
      this.logValidationError(this.gettingStarted); 
    }

  getDetails(gettStarted : FormGroup){
 /*    let gettingstartedMap = new Map();
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
      }) */
   //this.service.getGettingStarted().forEach(data=>{console.log(data)});
   const observable =  this.service.getGettingStarted();
    const observer = {
      next: x => {
        this.gettingStarted.patchValue({
          Application_CRDA : x.Application_CRDA,
          appcompletedinUS : x.appcompletedinUS,
          ownerOtherThanPI : x.ownerOtherThanPI,
          product : x.product,
          premiumMode : x.premiumMode,
          niprNum : x.niprNum,
          preAmount : x.preAmount,
          faceAmount : x.faceAmount,
          illustrationPDF : x.illustrationPDF,
          lumpsum : x.lumpsum,
          singlePremium : x.singlePremium
          
        })
       this.showHideOwner(x.ownerOtherThanPI);
      }
    };
   observable.subscribe(observer);
  }
  onNext(){
    
    let value = "proposed-insured";
    this.nextScreen.emit(value);
  }
  validationMessages={
    'Application_CRDA': 'Application CRDA is missing',
    'appcompletedinUS': 'Answer to Application completed in the United States is missing.',
    'ownerOtherThanPI': 'Answer to Owner of the Policy be someone other than the Proposed Insured is missing.',
    'product': 'Product is missing.',
    'niprNum': 'NIPR is missing.',
    'illustrationPDF': 'Answer to Is there an Illustration PDF attached with the Application Packet is missing.',
    'premiumMode': 'Premium Mode is missing.',
    'lumpsum': 'Planned First Year Lump Sum Amount is missing.',
    'singlePremium': 'Planned Single Premium Amount is missing.'
  };
  gettingstartedErrors={
    'Application_CRDA': '',
    'appcompletedinUS': '',
    'ownerOtherThanPI': '',
    'product': '',
    'niprNum': '',
    'illustrationPDF': '',
    'premiumMode': '',
    'lumpsum': '',
    'singlePremium': ''
  };
  logValidationError(group:FormGroup){
    Object.keys(group.controls).forEach((
      key :string) =>{
        const abstractcontrol = group.get(key);
        
        this.gettingstartedErrors[key]='';
        if(abstractcontrol && !abstractcontrol.valid){
          this.gettingstartedErrors[key]=this.validationMessages[key];
        }
      }
    )
    if(group.get('illustrationPDF').value != "Yes"){
      this.gettingstartedErrors.lumpsum="";
      this.gettingstartedErrors.singlePremium="";
    }
    this.service.postGettingStartedServerError(JSON.parse(JSON.stringify(this.gettingstartedErrors))).subscribe();
  }
}
