import { NgModule } from '@angular/core';
import { ActionsComponent } from './actions/actions';
import { ActionDetailComponent } from './action-detail/action-detail';
import { LogoComponent } from './logo/logo';
import { SocialAuthComponent } from './social-auth/social-auth';
@NgModule({
	declarations: [ActionsComponent,
    ActionDetailComponent,
    LogoComponent,
    SocialAuthComponent],
	imports: [],
	exports: [ActionsComponent,
    ActionDetailComponent,
    LogoComponent,
    SocialAuthComponent]
})
export class ComponentsModule {}
