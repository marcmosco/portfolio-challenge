import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './component/login-form.component';
import { SharedModule } from '../../shared/shared.module';

const routes: Routes = [{ path: '', component: LoginFormComponent }];
@NgModule({
  declarations: [LoginFormComponent],
  imports: [RouterModule.forChild(routes), SharedModule],
})
export class LoginFormModule {}
