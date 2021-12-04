import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Country } from '../interfaces/country';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  constructor(private _httpClient: HttpClient) {}

  private _apiUrl: string = environment.apiUrl;

  getAllCountries(): Observable<Country[]> {
    return this._httpClient.get<Country[]>(`${this._apiUrl}/all`).pipe(
      map((response) => {
        return response;
      })
    );
  }
}
