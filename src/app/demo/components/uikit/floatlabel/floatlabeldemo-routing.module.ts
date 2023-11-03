import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FloatLabelDemoComponent } from './floatlabeldemo.component';
import { PurchasesDetailsComponent } from './purchases-details/purchases-details.component';
import { AddPurchasesComponent } from './add-purchases/add-purchases.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: FloatLabelDemoComponent },
		{ path: 'addproduct', component: AddPurchasesComponent },
		{ path: 'details/:id', component: PurchasesDetailsComponent }
	])],
	exports: [RouterModule]
})
export class FloatlabelDemoRoutingModule { }
