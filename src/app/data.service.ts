import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl = 'https://api.slingacademy.com/v1/sample-data/photos';

  constructor(private http: HttpClient) { }

  getPhotos(offset: number, limit: number): Observable<any> {
    return this.http.get(`${this.apiUrl}?offset=${offset}&limit=${limit}`);
  }

  getPhotoDetails(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  private handleError(error: HttpErrorResponse) {
    return throwError('Algo deu errado!');
  }
}
