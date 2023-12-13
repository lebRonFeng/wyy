import { Component, OnInit, ViewChild } from '@angular/core';
import { NzCarouselComponent } from 'ng-zorro-antd';
import { Banner, HotTag, Singer, SongSheet } from 'src/app/services/data-types/common.types';
import { HomeService } from 'src/app/services/home.service';
import { SingerService } from 'src/app/services/singer.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  carouselActiveIndex = 0;
  banners: Banner[];
  hotTags: HotTag[];
  songSheetList: SongSheet[];
  singers: Singer[];

  @ViewChild(NzCarouselComponent) private nzCarousel: NzCarouselComponent;

  constructor(
    private homeServe: HomeService,
    private singerServe: SingerService,
    ) {
    this.getBanners();
    this.getHotTags();
    this.getPersonalizedsheetList();
    this.getEnterSingers();
  }

  private getBanners() {
    this.homeServe.getBanners().subscribe(banners => {
      this.banners = banners;
    })
  }

  private getHotTags() {
    this.homeServe.getHotTags().subscribe(tags => {
      this.hotTags = tags;
    })
  }

  private getPersonalizedsheetList() {
    this.homeServe.getPerosonalSheetList().subscribe(sheets => {
      this.songSheetList = sheets;
    })
  }

  private getEnterSingers() {
    this.singerServe.getEnterSinger().subscribe(singers => {
      this.singers = singers
    })
  }

  
  ngOnInit() {
  }

  onBeforehange({ to }) {
    this.carouselActiveIndex = to;
  }

  onChangeSlide(type: 'pre' | 'next') {
    this.nzCarousel[type]();
  }
}
