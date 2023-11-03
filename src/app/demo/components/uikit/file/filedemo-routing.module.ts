import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FileDemoComponent } from './filedemo.component';
import { StorsDetailsComponent } from './stors-details/stors-details.component';
import { AddStorsComponent } from './add-stors/add-stors.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: FileDemoComponent },
		{ path: 'addStore', component: AddStorsComponent },
		{ path: 'details/:id', component: StorsDetailsComponent },
	])],
	exports: [RouterModule]
})
export class FileDemoRoutingModule { }
