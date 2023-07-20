import { Component, Input, OnInit } from '@angular/core';

import { MatSidenav } from '@angular/material/sidenav';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() inputSideNav: MatSidenav;
  name: string;
  /*storedUser: User;*/
  decodedToken: any;

  constructor() /* private dialog: MatDialog     private jwtHelper: JwtHelperService,
     private tokenService: TokenService,

     public carteService: CartService*/
  {}

  ngOnInit(): void {
    /*this.tokenService.getInfoObs().subscribe((res) => {
      this.storedUser = res;
      this.decodedToken = this.jwtHelper.decodeToken(this.storedUser.token);
    });
    console.log('storedUser:', this.storedUser);*/
  }

  /*  openCart() {
    const dialogRef = this.dialog.open(CartComponent, {
      height: '600px',
      width: '90vw',
      hasBackdrop: true,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }*/
}
