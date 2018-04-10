import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrderedItemPage } from './ordered-item';

@NgModule({
  declarations: [
    OrderedItemPage,
  ],
  imports: [
    IonicPageModule.forChild(OrderedItemPage),
  ],
})
export class OrderedItemPageModule {}
