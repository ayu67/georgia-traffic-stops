﻿import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component'; 
import { jqxNotificationModule } from 'jqwidgets-ng/jqxnotification';
import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxPanelModule } from 'jqwidgets-ng/jqxpanel';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule, CommonModule, jqxNotificationModule, jqxButtonModule, jqxPanelModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
