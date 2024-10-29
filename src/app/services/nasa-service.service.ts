import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NasaService {
  private readonly PIC_OF_THE_DAY_URL = 'https://api.nasa.gov/planetary/apod';
  private readonly MARS_ROVER_PHOTO_URL = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos';
  private readonly API_KEY = 'rJPQk2tvu4vVZvHTs7sLtdERV3taXfxLc8cDYfdJ';
  constructor(private http: HttpClient) { }

  getPicOfTheDay$(): Observable<any> {
    const params = new HttpParams().set('api_key', this.API_KEY);
    return this.http.get<any>(this.PIC_OF_THE_DAY_URL, { params });
  }

  getRoverCuriosityPic$(): Observable<any> {
    const params = new HttpParams()
      .set('api_key', this.API_KEY)
      .set('sol', '1000')
      .set('page', '1')
    return this.http.get<any>(this.MARS_ROVER_PHOTO_URL, { params });
  }
}
