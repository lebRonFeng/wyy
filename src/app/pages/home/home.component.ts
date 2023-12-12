import { Component, OnInit, ViewChild } from '@angular/core';
import { NzCarouselComponent } from 'ng-zorro-antd';
import { Banner } from 'src/app/services/data-types/common.types';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  carouselActiveIndex = 0;
  banners: Banner[];

  @ViewChild(NzCarouselComponent) private nzCarousel: NzCarouselComponent;

  constructor(private homeServe: HomeService) {
    this.homeServe.getBanners().subscribe(banners => {
      this.banners = banners;
    })
   }

  ngOnInit() {
  }

  onBeforehange({to}){
    this.carouselActiveIndex = to;
  }

  onChangeSlide(type:'pre' | 'next'){
    this.nzCarousel[type]();
  }
}
