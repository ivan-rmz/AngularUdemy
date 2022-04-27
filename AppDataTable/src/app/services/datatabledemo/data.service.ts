import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { InfoAPIResponse } from 'src/app/models/infoAPI.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  url: string = "https://api.publicapis.org/entries";
  constructor(private _http: HttpClient) { }

  getEntries(): Observable<InfoAPIResponse> {
    return this._http.get<InfoAPIResponse>(this.url);
  }
}
