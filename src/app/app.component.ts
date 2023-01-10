import { Component, OnInit, ViewChild } from '@angular/core';
import { SideNavComponent } from './shared/template/side-nav/component/side-nav.component';
import { MenuService } from './shared/template/side-nav/service/menu.service';
import { AlbumModel } from './shared/model/album.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'GpgAng';

  listAlbums: AlbumModel[] = [];

  @ViewChild('nav') nav: SideNavComponent;
  constructor(private menuService: MenuService) {}

  ngOnInit(): void {
    this.menuService.loadAllAlbums().subscribe((res) => {
      this.listAlbums = res;
    });
  }

  openNav() {
    this.nav.toggle(true);
  }
}
