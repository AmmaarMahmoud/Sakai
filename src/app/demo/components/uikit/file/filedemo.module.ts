import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FileDemoComponent } from './filedemo.component';
import { FileDemoRoutingModule } from './filedemo-routing.module';
import { TableModule } from 'primeng/table';
import { StorsDetailsComponent } from './stors-details/stors-details.component';
import { AddStorsComponent } from './add-stors/add-stors.component';
import { ButtonModule } from 'primeng/button';
import { FieldsetModule } from 'primeng/fieldset';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { AddCategoryComponent } from './add-category/add-category.component';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
@NgModule({
	imports: [
		CommonModule,
		FormsModule,
        FileDemoRoutingModule,
		TableModule,
		ButtonModule,
		FieldsetModule,
		ReactiveFormsModule,
		InputTextModule,
		InputNumberModule,
		DialogModule,
		DropdownModule
	],
	declarations: [FileDemoComponent, StorsDetailsComponent, AddStorsComponent, AddCategoryComponent],
})
export class FileDemoModule { }
