import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonDemoComponent } from './buttondemo.component';
import { AddSalesComponent } from './add-sales/add-sales.component';
import { SalesDetailsComponent } from './sales-details/sales-details.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: ButtonDemoComponent},
		{ path: 'addsales', component: AddSalesComponent},
		{ path: 'details/:id', component: SalesDetailsComponent}
	])],
	exports: [RouterModule]
})
export class ButtonDemoRoutingModule { }
