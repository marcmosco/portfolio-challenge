import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';

import { AlbumModel } from './shared/model/album.model';
import { UserService } from './shared/service/user.service';
import { filter, switchMap } from 'rxjs';
import { MenuService } from './shared/service/menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'GpgAng';

  listAlbums: AlbumModel[] = [];

  constructor(
    private menuService: MenuService,
    public userService: UserService,
    private changeDetector: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.userService
      .getInfoObs()
      .pipe(
        switchMap((res) => {
          return this.menuService.loadAllAlbums();
        })
      )
      .subscribe((res) => {
        this.listAlbums = res;
      });
  }
}
