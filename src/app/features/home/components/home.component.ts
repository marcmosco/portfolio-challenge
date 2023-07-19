import { Component, OnInit } from '@angular/core';
import { PhotoModel } from '../../../shared/model/photo.model';
import { HomeService } from '../service/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  listPhotos: PhotoModel[] = [];
  isLoadingData: boolean;
  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.isLoadingData = true;
    this.homeService.loadAllImages().subscribe((res) => {
      this.listPhotos = res;
      this.isLoadingData = false;
    });
  }
}
