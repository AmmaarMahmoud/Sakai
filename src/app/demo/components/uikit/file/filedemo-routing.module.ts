import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FileDemoComponent } from './filedemo.component';
import { StorsDetailsComponent } from './stors-details/stors-details.component';
import { AddStorsComponent } from './add-stors/add-stors.component';
import { AddCategoryComponent } from './add-category/add-category.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: FileDemoComponent },
		{ path: 'addStore', component: AddStorsComponent },
		{ path: 'addCategory', component: AddCategoryComponent },
		{ path: 'details/:id', component: StorsDetailsComponent },
	])],
	exports: [RouterModule]
})
export class FileDemoRoutingModule { }
