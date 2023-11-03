import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { BillsComponent } from './bills/bills.component';
import { FormLayoutDemoRoutingModule } from './formlayoutdemo-routing.module';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
@NgModule({
	imports: [
		FormLayoutDemoRoutingModule,
		CommonModule,
		FormsModule,
		TableModule,
		ButtonModule,
		DialogModule
	],
	declarations: [ BillsComponent]
})
export class FormLayoutDemoModule { }
