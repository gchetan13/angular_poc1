import { Component, OnInit, ViewChild, OnChanges, SimpleChanges, KeyValueDiffer, DoCheck} from '@angular/core';
import {Screen} from '../screen'
import {SCREENS} from '../all-screens'
import { GettingStartedComponent } from './getting-started/getting-started.component';
import { ProposedInsuredComponent } from './proposed-insured/proposed-insured.component';
import { OwnerComponent } from './owner/owner.component';
import { PremiumComponent } from './premium/premium.component';
import { ExistingAppliedComponent } from './existing-applied/existing-applied.component';

@Component({
  selector: 'app-screens',
  templateUrl: './screens.component.html',
  styleUrls: ['./screens.component.css']
})
export class ScreensComponent implements OnInit,OnChanges {

 selectedScreen : String;
 differ : KeyValueDiffer<String,Object>;
 @ViewChild(GettingStartedComponent)
 private gettingStartedComponent : GettingStartedComponent;
 @ViewChild(ProposedInsuredComponent)
 private proposedInsuredComponent : ProposedInsuredComponent;
 @ViewChild(OwnerComponent)
 private ownerComponent : OwnerComponent;
 @ViewChild(PremiumComponent)
 private premiumComponent: PremiumComponent;
 @ViewChild(ExistingAppliedComponent)
 private existingAppliedComponent: ExistingAppliedComponent;

  PIOtherOwn : boolean;
  screens=SCREENS;
    constructor() { }

  ngOnInit() {
    this.PIOtherOwn =false;
    this.selectedScreen = "getting-started";
  }
  ngOnChanges(changes: SimpleChanges): void {
   console.log('In ngOnchanges in Screens ............');
   for(let name in changes){
     console.log('name :'+changes[name].currentValue);
     console.log('isFirstChange :'+changes[name].isFirstChange);
     console.log('previous value :'+changes[name].previousValue);
     console.log('firstchange :'+changes[name].firstChange);
   }
   
  }
/*   ngDoCheck(): void {
    console.log('Im Do check  '+this.selectedScreen);
  } */
  OnSelectedScreen(screen : Screen){
    let  prev_screen = this.selectedScreen;
    this.selectedScreen=screen.id;
    this.saveDetails(prev_screen);
  }
  saveDetails(screen : String){
    if(screen == "getting-started")
    this.gettingStartedComponent.saveDetails();
    if(screen == "proposed-insured")
    this.proposedInsuredComponent.saveDetails();
    //console.log('all details saved');
    switch(screen){
      case "getting-started" :   {this.gettingStartedComponent.saveDetails(); break;}
      case "proposed-insured" :  {this.proposedInsuredComponent.saveDetails(); break;}
      case "owner" :  {this.ownerComponent.saveDetails(); break;}
      case "existing-applied" :  {this.existingAppliedComponent.saveDetails(); break;}
      case "premium" :  {this.premiumComponent.saveDetails(); }
    }
  }
  ownerScreen = new Screen('owner','owner')
  IsPIOtherThanOwn(PIOtherOwn : String){
    if(PIOtherOwn == "Yes"){
      this.PIOtherOwn =true; 
      if(!this.screens.includes(this.ownerScreen)){
      this.screens.splice(2,0,this.ownerScreen);
      }
    }else{
      this.PIOtherOwn =false;
      if(this.screens.includes(this.ownerScreen))
      this.screens.splice(2,1);
    }
  }
  
}
