import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { Hotel } from '../models/hotel';
import { ToastService } from './toast.service';
import { catchError } from 'rxjs/operators';
const url = 'https://fakeback.herokuapp.com/hotels';


@Injectable({providedIn: 'root'})
export class HotelsService {
  constructor(private httpClient: HttpClient,
              private toastService: ToastService) { }
  
  getHotels(): Observable<Hotel[]> {
    return this.httpClient
    .get<Hotel[]>(url)
    .pipe(
      catchError(this.handleError.bind(this))
    );
  }
  getHotelsQuery(value): Observable<Hotel[]> {
    const params = new HttpParams()
    .set('q', value);
    return this.httpClient
    .get<Hotel[]>(url, {params})
    .pipe(
      catchError(this.handleError.bind(this))
    );
  }
  getHotelById(id): Observable<Hotel> {
    return this.httpClient
    .get<Hotel>(url + `/${id}`)
    .pipe(
      catchError(this.handleError.bind(this))
    );
  }
  handleError(errorResponse: HttpErrorResponse) {
        this.toastService.showToast(`
        Não foi possível buscar a lista de hotéis. Tente novamente mais tarde.`, 5000);
        return of(null);
  }
}
