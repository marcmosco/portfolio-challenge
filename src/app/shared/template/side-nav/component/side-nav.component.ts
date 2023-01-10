import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { AlbumModel } from '../../../model/album.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent implements OnInit {
  @ViewChild('mySidenav') sideNav: ElementRef;
  @Input() listAlbums: AlbumModel[];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  toggle(val: boolean) {
    if (val) {
      this.sideNav.nativeElement.style.width = '250px';
    } else {
      this.sideNav.nativeElement.style.width = '0';
    }
  }

  closeNav() {
    this.toggle(false);
  }

  onItemSelected(album: AlbumModel) {
    this.router.navigate(['/detail-album', album.id]);
  }
}
