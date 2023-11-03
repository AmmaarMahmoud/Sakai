import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FloatLabelDemoComponent } from './floatlabeldemo.component';
import { FloatlabelDemoRoutingModule } from './floatlabeldemo-routing.module';
import { TableModule } from 'primeng/table';
import { AddPurchasesComponent } from './add-purchases/add-purchases.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { FieldsetModule } from 'primeng/fieldset';
import { PurchasesDetailsComponent } from './purchases-details/purchases-details.component';
import { CalendarModule } from 'primeng/calendar';
import { TreeSelectModule } from 'primeng/treeselect';
@NgModule({
	imports: [
		CommonModule,
		FloatlabelDemoRoutingModule,
		TableModule,
		ReactiveFormsModule,
		ButtonModule,
		InputTextModule,
		InputNumberModule,
		FieldsetModule,
		CalendarModule,
		TreeSelectModule,
		FormsModule
	],
	declarations: [
		FloatLabelDemoComponent,
		AddPurchasesComponent, 
		PurchasesDetailsComponent
	]
})
export class FloatlabelDemoModule { }
