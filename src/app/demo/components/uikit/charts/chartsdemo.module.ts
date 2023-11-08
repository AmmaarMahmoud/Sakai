import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsDemoComponent } from './chartsdemo.component';
import { ChartsDemoRoutingModule } from './chartsdemo-routing.module';
import { TableModule } from 'primeng/table';
import { SupplierDetailsComponent } from './supplier-details/supplier-details.component';
import { AddSuppliersComponent } from './add-suppliers/add-suppliers.component';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import { FieldsetModule } from 'primeng/fieldset';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';


@NgModule({
	imports: [
		CommonModule,
		ChartsDemoRoutingModule,
		TableModule,
		ButtonModule,
		InputNumberModule,
		FieldsetModule,
		ReactiveFormsModule,
		InputTextModule
	],
	declarations: [ChartsDemoComponent, SupplierDetailsComponent, AddSuppliersComponent]
})
export class ChartsDemoModule { }
