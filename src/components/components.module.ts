import { NgModule } from '@angular/core';
import { ActionsComponent } from './actions/actions';
import { ActionDetailComponent } from './action-detail/action-detail';
import { LogoComponent } from './logo/logo';
import { SocialAuthComponent } from './social-auth/social-auth';
import { BurgerMenuComponent } from './burger-menu/burger-menu';
import { CustomSelectComponent } from './custom-select/custom-select';
import { SelectCategoriesComponent } from './select-categories/select-categories';
import { SelectSubcategoriesComponent } from './select-subcategories/select-subcategories';
import { ItemControllComponent } from './item-controll/item-controll';
import { ItemArrayComponent } from './item-array/item-array';
import { FormGroupComponent } from './form-group/form-group';
@NgModule({
	declarations: [ActionsComponent,
    ActionDetailComponent,
    LogoComponent,
    SocialAuthComponent,
    BurgerMenuComponent,
    CustomSelectComponent,
    SelectCategoriesComponent,
    SelectSubcategoriesComponent,
    ItemControllComponent,
    ItemArrayComponent,
    FormGroupComponent],
	imports: [],
	exports: [ActionsComponent,
    ActionDetailComponent,
    LogoComponent,
    SocialAuthComponent,
    BurgerMenuComponent,
    CustomSelectComponent,
    SelectCategoriesComponent,
    SelectSubcategoriesComponent,
    ItemControllComponent,
    ItemArrayComponent,
    FormGroupComponent]
})
export class ComponentsModule {}
