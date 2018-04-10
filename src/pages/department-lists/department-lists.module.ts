import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DepartmentListsPage } from './department-lists';

@NgModule({
  declarations: [
    DepartmentListsPage,
  ],
  imports: [
    IonicPageModule.forChild(DepartmentListsPage),
  ],
})
export class DepartmentListsPageModule {}
