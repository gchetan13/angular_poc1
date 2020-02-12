import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import {attributes} from '../all-attributes';
import {attribute} from '../attribute';
import { ScreenServiceService } from 'src/app/services/screen-service.service';
import { Observable, observable, Subscription } from 'rxjs';
//import {all-screens} from '../css';
@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['../css/all-screens.css']
})
export class OwnerComponent implements OnInit {
  owner : FormGroup;
  @Output() prevScreen = new EventEmitter<String>();
  @Output() nextScreen = new EventEmitter<String>();
  index : number;
  constructor(private fb:FormBuilder,private service : ScreenServiceService) { }
  prefixes = ["commander","Doctor","Mr.","Ms","Mrs.","General"];
  ngOnInit() {
//(<FormArray>this.owner.get("owners")).at(0).valueChanges.subscribe(data => this.validatedate(data));
//this.validateOwnerForm();
  //  this.owner = this.ownerGroup();
  this.owner = this.fb.group({
    owners :this.fb.array([
     this.ownerGroup()
    ])
          
});
this.index =1;
this.getDetails(this.owner);
this.ownerErrorsArray =[];
const observable = this.service.getownerServerError();
    const observer = {
      next: x => { this.ownerErrorsArray=x;}
      }
    
    observable.subscribe(observer);
}
  ownerGroup() : FormGroup{ 
    return this.fb.group({
    prefix: [''],
    firstName: ['',Validators.required],
    middleName: ['',Validators.maxLength(1)],
    lastName: ['',Validators.required],
    permanentAddress: ['',Validators.required],
    dateofBirth: ['',Validators.required],
    ssn: ['',Validators.required] ,
    id:['']
  });
}
getOwnerCount():number{
  let ownercount = 0;
  attributes.forEach(data=> {
    if(data.name.substring(0,12) == 'prefix_owner'){
    ownercount++;
    }
  });
  return ownercount;
}
saveDetails() {
  event.preventDefault();
  
  /* console.log('Using JSON ');  
  console.log(JSON.stringify(this.owner.value));
    let owners = (<FormArray>this.owner.get('owners'));
    let index =0;
  let ownercount =this.getOwnerCount();
  for( let owner of owners.controls ){

      Object.keys(owner.value).forEach(key => {
    let value = (<FormGroup>owner).get(key).value;

     if(index>=ownercount){
    attributes.push(new attribute(key+'_owner_'+index,value));
     }
     else{
       attributes.forEach(data=>{
        if(data.name==key+'_owner_'+index){
          data.value = value;
        }
       })
     }

  })
  index++;
  }
 */
//console.log('owner value  '+JSON.stringify(this.ownersArray.value));
//this.service.postOwner(JSON.parse(JSON.stringify(this.ownersArray.value))).subscribe();
let owners = (<FormArray>this.owner.get('owners'));
 //let observable = new Observable<JSON>();
 // subscription : Subscription;
for( let owner of owners.controls ){
  if(owner.get("id").value == ''){
    const observable =  this.service.postOwner(owner.value);
    const observer = {
      next: x => {
        const error = this.ownerErrors();
        error.id = x.id;
        owner.get("id").setValue(x.id);
        this.service.postOwnerServerError(JSON.parse(JSON.stringify(error))).subscribe();
        this.logValidationError(<FormGroup>owner,this.index,x.id);
      }
    };
    observable.subscribe(observer);
    
    //this.service.postOwner(owner.value).subscribe(data =>{console.log(JSON.stringify(data))});
  }else{
    this.service.putOwner(owner.value,owner.get("id").value).subscribe();
    this.logValidationError(<FormGroup>owner,this.index,owner.get("id").value);
  }
 
}
//this.logValidationError(owners);
}

getDetails(ownerGroupParam : FormGroup) {
  let ownerGroupMap = new Map();
  let ownerCount = this.getOwnerCount();
 
  let  ownerArray = this.fb.array([]);
               // console.log('owner length '+this.ownersArray.length); 
              
 let ownerMap = new Map();
/* if(ownerCount!=0){
  for(let i=0;i<ownerCount;i++){
    //let  value = this.gettingStarted.get(key).value;
    //let ownerGroup =  <FormGroup>(<FormArray>this.owner.get('owners')).controls[i];
    
    let localOwnerGroup = this.ownerGroup();
    Object.keys(localOwnerGroup.controls).forEach(key => {
      attributes.forEach(function(data){
        if(data.name == key+'_owner_'+i){
          ownerMap.set(data.name,data.value);
          switch(key){
            case "prefix" : {localOwnerGroup.patchValue({prefix : data.value}); break;}
            case "firstName" : {localOwnerGroup.patchValue({firstName : data.value}); break;}
            case "middleName" : {localOwnerGroup.patchValue({middleName : data.value}); break;}
            case "lastName" : {localOwnerGroup.patchValue({lastName : data.value}); break;}
            case "permanentAddress" : {localOwnerGroup.patchValue({permanentAddress : data.value}); break;}
            case "dateofBirth" : {localOwnerGroup.patchValue({dateofBirth : data.value}); break;}
            case "ssn" : {localOwnerGroup.patchValue({ssn : data.value}); break;}
          }
        }
      })
    })
    
    ownerArray.insert(i,localOwnerGroup);

   
  }
this.owner = this.fb.group({
  owners :   ownerArray
});
}
 */const observable =  this.service.getOwner();
    const observer = {
      next: x => {
       // console.log('length in obeserver ' + JSON.stringify(x.length));
        let lengthowner=JSON.stringify(x.length);
        x.forEach(element => {
          let localOwnerGroup = this.ownerGroup();
          localOwnerGroup.patchValue({
          prefix: element.prefix,
          firstName: element.firstName,
          middleName: element.middleName,
          lastName: element.lastName,
          permanentAddress: element.permanentAddress,
          dateofBirth: element.dateofBirth,
          ssn: element.ssn ,
          id:element.id
          })
          //console.log('owner in get '+JSON.stringify( localOwnerGroup.value));
           
          ownerArray.push(localOwnerGroup);
        });
        if(JSON.stringify(x.length) == "0")
        ownerArray.push(this.ownerGroup());
        this.owner = this.fb.group({
          owners :   ownerArray
        });
/*         this.owner.patchValue({
          prefix: x.prefix,
          firstName: x.firstName,
          middleName: x.middleName,
          lastName: x.lastName,
          permanentAddress: x.permanentAddress,
          dateofBirth: x.dateofBirth,
          ssn: x.ssn
        }) */

}
    }
    observable.subscribe(observer);
  }

get ownersArray(){
  return this.owner.controls['owners'] as FormArray;
}


addOwner(){
  (<FormArray>this.owner.get('owners')).push(this.ownerGroup());
 // this.service.postOwner(JSON.parse(JSON.stringify(this.ownerGroup().value))).subscribe();
}

removeOwner(location:number,index: number){
  this.ownersArray.removeAt(location);
  let index1 = attributes.findIndex(function(attribute){return (attribute.name.substr(-2,2)=="_"+index)})
  // delete all attributes for deleted block
  attributes.splice(index1,7);
  if(index1>0 && index1!=attributes.length){
    attributes.forEach(data=>{
      if(data.name.substr(-2,2) == "_"+(index+1)){
        data.name = data.name.substr(-(data.name.length),data.name.length-1)+index;
      }
    })
  }
this.service.deleteOwner(index).subscribe();
this.service.deleteOwnerServerError(index).subscribe();
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
onPrev(){
  let value = "proposed-insured";
  this.prevScreen.emit(value);
}
onNext(){
    
  let value = "existing-applied";
  this.nextScreen.emit(value);
}
validationMessages = {
  "firstName": "First Name",
  "lastName": "Last Name",
  "permanentAddress": "Permanent Address",
  "dateofBirth": "Date of birth",
  "ssn": "SSN"
}
errorMessages = {
  "firstName": "First Name",
  "lastName": "Last Name",
  "permanentAddress": "Permanent Address",
  "dateofBirth": "Date of birth",
  "ssn": "SSN"
}
ownerErrors() : any {
  var errors = {
    "firstName" : "",
    "lastName": "",
    "permanentAddress": "",
    "dateofBirth": "",
    "ssn": "",
    "id":""
  }
return errors;
};
ownerErrorsArray = [] ;
logValidationError(owner:FormGroup,index:number,id:number){
  Object.keys((<FormGroup>owner).controls).forEach((
    key :string) =>{
      const abstractcontrol = owner.get(key);
      this.errorMessages[key]='';
      if(abstractcontrol && !abstractcontrol.valid){
        this.errorMessages[key]=this.validationMessages[key]+' '+index+' is required';
      // console.log(this.ownerErrors[key]);
      // this.ownersErrors.push(this.validationMessages[key]+' '+index+' is required');
      }
    }
  )
  this.service.putOwnerServerError(JSON.parse(JSON.stringify(this.errorMessages)),parseInt(owner.get("id").value)).subscribe();
  this.index++;  
  //console.log('put server success')
  // this.ownerErrors.id = owner.get("id").value; 
    //this.ownersErrors.push(this.ownerErrors);
/*     if(this.ownerErrors.id == '')
    this.service.postOwnerServerError(JSON.parse(JSON.stringify(this.ownerErrors))).subscribe();
    else
    this.service.putOwnerServerError(JSON.parse(JSON.stringify(this.ownerErrors)),parseInt(this.ownerErrors.id)).subscribe();
 */
 
  //console.log(this.ownersErrors);
  
}
}
