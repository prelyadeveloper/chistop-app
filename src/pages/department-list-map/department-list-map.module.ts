import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DepartmentListMapPage } from './department-list-map';

@NgModule({
  declarations: [
    DepartmentListMapPage,
  ],
  imports: [
    IonicPageModule.forChild(DepartmentListMapPage),
  ],
})
export class DepartmentListMapPageModule {}
