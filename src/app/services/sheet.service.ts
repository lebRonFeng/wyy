import { Inject, Injectable } from "@angular/core";
import { API_CONFIG, ServicesModule } from "./services.module";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { SongSheet } from "./data-types/common.types";
import { map } from "rxjs/internal/operators";

@Injectable({
  providedIn: ServicesModule
})
export class SheetService {

  constructor(private http: HttpClient, @Inject(API_CONFIG) private uri: string) { }

  getSongSheetDetail(id: number): Observable<SongSheet> {
    const params = new HttpParams().set('id', id.toString());
    return this.http.get(this.uri + 'playlist/detail', {params}).pipe(map((res: { playlist: SongSheet }) => res.playlist));
  }

}
