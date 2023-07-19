import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import { SideNavComponent } from './shared/template/side-nav/component/side-nav.component';
import { MenuService } from './shared/template/side-nav/service/menu.service';
import { AlbumModel } from './shared/model/album.model';
import {UserService} from "./shared/user.service";
import {filter, switchMap} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'GpgAng';

  listAlbums: AlbumModel[] = [];

  @ViewChild('nav') nav: SideNavComponent;

  constructor(private menuService: MenuService, public userService:UserService,
              private changeDetector : ChangeDetectorRef) {}

  ngOnInit(): void {
    this.userService.getInfoObs().pipe(
      filter(res=>!!res.id),
      switchMap(res=>{
        return this.menuService.loadAllAlbums();
      })
    ).subscribe((res) => {
      this.listAlbums = res;
    });
  }

  openNav() {
    this.changeDetector.detectChanges();
    this.nav.toggle(true);
  }
}
