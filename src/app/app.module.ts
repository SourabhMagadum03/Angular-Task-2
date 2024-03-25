import{ HttpClientModule } from "@angular/common/http" ;
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModel } from "./app.routing.model";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations : [
        AppComponent,
        HomeComponent,
        AboutComponent,
        HeaderComponent,
     
    ],
    imports : [
        BrowserModule,
        HttpClientModule,
        NoopAnimationsModule,
        AppRoutingModel,
        FormsModule,
        ReactiveFormsModule
    ],
    providers : [ ],
    bootstrap : [AppComponent],
})

export class AppModule{}