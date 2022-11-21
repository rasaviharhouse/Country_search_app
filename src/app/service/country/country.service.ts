import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Country} from 'src/app/models/country/country.model';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  countryUrl = 'https://restcountries.com/';
  uriVersion = 'v3.1';

  constructor(private http: HttpClient) {

  }

  fetchData(): Observable<Country[]> {
    const url = this.countryUrl + this.uriVersion + '/all';
    return this.http.get<Country[]>(url);
  }

  fetchCountryData(name: string): Observable<Country[]> {
    const url = this.countryUrl + this.uriVersion + '/name/' + name + '?fullText=true';
    return this.http.get<Country[]>(url);
  }

}
