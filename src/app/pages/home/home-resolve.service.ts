import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { Observable, forkJoin } from "rxjs";
import { first } from "rxjs/internal/operators";
import { Banner, HotTag, Singer, SongSheet } from "src/app/services/data-types/common.types";
import { HomeService } from "src/app/services/home.service";
import { SingerService } from "src/app/services/singer.service";

type HomeDataType = [Banner[], HotTag[], SongSheet[], Singer[]];

@Injectable()
export class HomeResolveService implements Resolve<HomeDataType> {
    constructor(private homeServe: HomeService,
        private singerServe: SingerService) { }
    resolve(): Observable<HomeDataType> {
        return forkJoin([
            this.homeServe.getBanners(),
            this.homeServe.getHotTags(),
            this.homeServe.getPerosonalSheetList(),
            this.singerServe.getEnterSinger()
        ]).pipe(first());
    }
}