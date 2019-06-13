import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import {attributes} from '../all-attributes';
import {attribute} from '../attribute';

@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.css']
})
export class OwnerComponent implements OnInit {
  owner : FormGroup;
  constructor(private fb:FormBuilder) { }
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
this.getDetails(this.owner);
}
  ownerGroup() : FormGroup{ 
    return this.fb.group({
    prefix: [''],
    firstName: ['',Validators.required],
    middleName: ['',Validators.maxLength(1)],
    lastName: ['',Validators.required],
    permanentAddress: ['',Validators.required],
    dateofBirth: ['',Validators.required],
    ssn: ['',Validators.required] 
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

  console.log('ownerGroup details saved');

}

getDetails(ownerGroupParam : FormGroup) {
  let ownerGroupMap = new Map();
  let ownerCount = this.getOwnerCount();
 
  let  ownerArray = this.fb.array([]);
                
              
 let ownerMap = new Map();
if(ownerCount!=0){
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
}

get ownersArray(){
  return this.owner.controls['owners'] as FormArray;
}


addOwner(){
  (<FormArray>this.owner.get('owners')).push(this.ownerGroup());
}

removeOwner(index: number){
  this.ownersArray.removeAt(index);
  let index1 = attributes.findIndex(function(attribute){return (attribute.name.substr(-2,2)=="_"+index)})
  // delete all attributes for deleted block
  attributes.splice(index1,7);
  console.log(attributes.length+' '+index1);
  if(index1>0 && index1!=attributes.length){
    console.log('condition matched');
    attributes.forEach(data=>{
      if(data.name.substr(-2,2) == "_"+(index+1)){
        console.log('found attribute');
        data.name = data.name.substr(-(data.name.length),data.name.length-1)+index;
      }
    })
  }

}

invalidDate  : {}
validatedate(date : String){

  let year = parseInt(date.split("-")[0]);
  if(year<1900 || year >2099){
    console.log('Please enter a valid date')
    this.invalidDate = "Please enter a valid date";
  }
  else{
    this.invalidDate = "";
  }
}
 
}
