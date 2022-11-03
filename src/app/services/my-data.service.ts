import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyDataService {
  dataApiUrl = "https://api.openbrewerydb.org/breweries?per_page=10";
  loginApiUrlLink = "http://rdd.jharkhand.gov.in:83/api/user_api";

  constructor(private http: HttpClient) {  }

  getData(){
    return this.http.get(this.dataApiUrl);
  }

  users(){
    return this.http.get(this.loginApiUrlLink);
  }
}
