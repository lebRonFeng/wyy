import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NzCarouselComponent } from 'ng-zorro-antd';
import { map } from 'rxjs/internal/operators';
import { Banner, HotTag, Singer, SongSheet } from 'src/app/services/data-types/common.types';
import { SheetService } from 'src/app/services/sheet.service';

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
    private route: ActivatedRoute,
    private sheetServe: SheetService
    ) {
      this.route.data.pipe(map(res => res.homeDatas)).subscribe(([banners, hotTags, songSheetList, singers]) => {
        this.banners = banners;
        this.hotTags = hotTags;
        this.songSheetList = songSheetList;
        this.singers = singers;
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

  onPlaySheet(id: number){
    console.log('id:',id);
    this.sheetServe.playSheet(id).subscribe(res => {
      console.log('res:', res);
    })
  }
}
