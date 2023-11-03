import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonDemoComponent } from './buttondemo.component';
import { ButtonDemoRoutingModule } from './buttondemo-routing.module';
import { TableModule } from 'primeng/table';
import { AddSalesComponent } from './add-sales/add-sales.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { FieldsetModule } from 'primeng/fieldset';
import { SalesDetailsComponent } from './sales-details/sales-details.component';
import { CalendarModule } from 'primeng/calendar';
@NgModule({
	imports: [
		CommonModule,
		ButtonDemoRoutingModule,
		TableModule,
		FormsModule,
		ReactiveFormsModule,
		ButtonModule,
		InputTextModule,
		InputNumberModule,
		FieldsetModule,
		CalendarModule
	],
	declarations: [ButtonDemoComponent, AddSalesComponent, SalesDetailsComponent]
})
export class ButtonDemoModule { }
