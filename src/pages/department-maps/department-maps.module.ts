import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DepartmentMapsPage } from './department-maps';

@NgModule({
  declarations: [
    DepartmentMapsPage,
  ],
  imports: [
    IonicPageModule.forChild(DepartmentMapsPage),
  ],
})
export class DepartmentMapsPageModule {}
