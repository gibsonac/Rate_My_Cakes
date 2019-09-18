import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }
  getCakes() {
    return this._http.get('/cakes/')
  }
  postCake(theCake) {
    return this._http.post('/cakes/', theCake)
  }
  thisCake(id) {
    return this._http.get(`/cakes/${id}`)
  }
  postReview(id, theReview) {
    return this._http.post(`/ratings/${id}`, theReview)
  }
  cakeSearch(search) {
    return this._http.get(`/cakes/search/${search}`)
  }
}
