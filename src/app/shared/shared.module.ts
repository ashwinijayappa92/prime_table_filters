import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
 MatNativeDateModule,MatDatepickerModule,MatIconModule,MatButtonModule,MatCheckboxModule, MatToolbarModule, MatCardModule,MatFormFieldModule,MatInputModule,MatRadioModule,MatListModule,MatSidenavModule,MatTableModule,MatMenuModule,MatProgressBarModule ,MatProgressSpinnerModule 
} from '@angular/material';

import {DropdownModule} from 'primeng/dropdown';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {MultiSelectModule} from 'primeng/multiselect';
import {DialogModule} from 'primeng/dialog';
import {SliderModule} from 'primeng/slider';
import {RadioButtonModule} from 'primeng/radiobutton';
import {InputTextModule} from 'primeng/inputtext';


@NgModule({
 imports: [MatNativeDateModule,MatDatepickerModule,MatIconModule,MatButtonModule,MatCheckboxModule, MatToolbarModule,FormsModule, MatCardModule,MatFormFieldModule,MatInputModule,MatListModule,MatRadioModule,MatSidenavModule,MatTableModule,MatMenuModule,MultiSelectModule,SliderModule,
 
MatProgressBarModule,MatProgressSpinnerModule ,RadioButtonModule,
 TableModule, 
    ButtonModule,
    DropdownModule,DialogModule,InputTextModule
],
 
exports: [MatNativeDateModule,FormsModule,MatSidenavModule,MatProgressBarModule ,
MatDatepickerModule,MatIconModule,MatButtonModule,MatCheckboxModule,MatMenuModule, MatTableModule,MatToolbarModule, MatCardModule,MatFormFieldModule,MatInputModule,MatListModule,MatRadioModule,MatProgressSpinnerModule ,
TableModule, 
ButtonModule,
DropdownModule,
MultiSelectModule,
DialogModule,
SliderModule,
RadioButtonModule,
InputTextModule
],
 
})
export class SharedModule { }