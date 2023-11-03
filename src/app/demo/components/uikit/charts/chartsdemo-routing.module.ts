import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ChartsDemoComponent } from './chartsdemo.component';
import { SupplierDetailsComponent } from './supplier-details/supplier-details.component';
import { AddSuppliersComponent } from './add-suppliers/add-suppliers.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: ChartsDemoComponent },
		{ path: 'addSupplier', component: AddSuppliersComponent },
		{ path: 'details/:id', component: SupplierDetailsComponent }
	])],
	exports: [RouterModule]
})
export class ChartsDemoRoutingModule { }
