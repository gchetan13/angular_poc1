import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import {Route} from '@angular/router'
import { AppComponent } from './app.component';
import { ScreensComponent } from './screens/screens.component';
import { GettingStartedComponent } from './screens/getting-started/getting-started.component';
import { ProposedInsuredComponent } from './screens/proposed-insured/proposed-insured.component';
import { OwnerComponent } from './screens/owner/owner.component';
import { ExistingAppliedComponent } from './screens/existing-applied/existing-applied.component';
import { PremiumComponent } from './screens/premium/premium.component';
import {TextMaskModule} from 'angular2-text-mask';
import {CurrencyPipe} from '@angular/common';
import { OnlyNumberDirective } from './only-number.directive';
import {ScreenServiceService} from './services/screen-service.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ScreensComponent,
    GettingStartedComponent,
    ProposedInsuredComponent,
    OwnerComponent,
    ExistingAppliedComponent,
    PremiumComponent,
    OnlyNumberDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    TextMaskModule,
    HttpClientModule
  ],
  providers: [CurrencyPipe,ScreenServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
