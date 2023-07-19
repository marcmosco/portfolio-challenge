import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './component/login-form.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {SharedModule} from "../../shared/shared.module";
import {MatSelectModule} from "@angular/material/select";

const routes: Routes = [{ path: '', component: LoginFormComponent }];
@NgModule({
  declarations: [LoginFormComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    RouterModule.forChild(routes),
    MatSnackBarModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    SharedModule

  ],
})
export class LoginFormModule {}
