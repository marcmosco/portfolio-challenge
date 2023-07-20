import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './shared/service/auth-gaurd.service';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'login',
    loadChildren: () =>
      import('./features/login-form/login-form.module').then(
        (m) => m.LoginFormModule
      ),
  },

  {
    path: 'detail-album',
    loadChildren: () =>
      import('./features/detail-album/detail-album.module').then(
        (m) => m.DetailAlbumModule
      ),
    canActivate: [AuthGuardService],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
