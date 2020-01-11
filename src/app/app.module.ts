import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ButtonButtonComponent } from './button-button/button-button.component';
import { PanelFieldsetComponent } from './panel-fieldset/panel-fieldset.component';

import {ButtonModule} from 'primeng/button';
import {FieldsetModule} from 'primeng/fieldset';
import {CheckboxModule} from 'primeng/checkbox';
import {InputSwitchModule} from 'primeng/inputswitch';
//import {TableModule} from 'primeng/table';
import { InputInputgroupComponent } from './input-inputgroup/input-inputgroup.component';
import { InputCheckboxComponent } from './input-checkbox/input-checkbox.component';
import { InputSwitchComponent } from './input-switch/input-switch.component';
import { DataTableComponent } from './data-table/data-table.component';
import { CarServiceService } from './data-table/car-service.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule,ButtonModule,FieldsetModule,BrowserAnimationsModule,CheckboxModule,InputSwitchModule ],
  declarations: [ AppComponent, HelloComponent, ButtonButtonComponent, PanelFieldsetComponent, InputInputgroupComponent, InputCheckboxComponent, InputSwitchComponent, DataTableComponent ],
  bootstrap:    [ AppComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [CarServiceService]
})
export class AppModule { }
