import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from './http.service';
import { temporaryAllocator } from '@angular/compiler/src/render3/view/util';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  cakes: any = [];
  title = 'public';
  postCake: any;
  SelectedCake: any;
  sum: number = 0;
  average: number;
  theReview: any;
  errors: String = '';
  haveErrors: boolean = false;
  ratinghaveErrors: boolean = false;
  ratingErrors: String = '';
  cakeSearch: String = '';
  searchValue;
  constructor(private _httpService: HttpService) { }
  ngOnInit() {
    this.getCakesFromService();
    this.postCake = {
      baker: "",
      url: ""
    }
    this.theReview = {
      star: 1,
      comment: ""
    }
  }
  getCakesFromService() {
    let observable = this._httpService.getCakes();
    observable.subscribe(data => {
      console.log("got the cakes!", data)
      this.cakes = data;
    })
  }
  newCake() {
    console.log("the submission", this.postCake)
    let observable = this._httpService.postCake(this.postCake);
    observable.subscribe(data => {
      if (data.length > 0) {
        this.errors = data;
        this.haveErrors = true;
      }
      else {
        console.log("we have the cake!", data)
        this.postCake = {
          baker: "",
          url: ""
        }
        this.getCakesFromService();
      }
    })
  }
  CakeToShow(cake) {
    console.log(cake);
    for (let rating of cake._ratings) {
      this.sum += rating.star;
    }
    console.log(cake._ratings.length)
    this.average = this.sum / cake._ratings.length
    cake['avgRating'] = this.average
    console.log(cake)
    this.SelectedCake = cake;
    // let observable = this._httpService.thisCake(id);
    // observable.subscribe(data => {
    //   console.log("we have the details!", data)
    //   this.theCake = data;
    // })
  }
  newReview(id) {
    let observable = this._httpService.postReview(id, this.theReview);
    observable.subscribe(data => {
      if (data.length > 0) {
        this.ratingErrors = data;
        this.ratinghaveErrors = true;
      }
      else {
        console.log("we have the review!", data)
        this.theReview = {
          star: 1,
          comment: ""
        }
      }
    })
  }
  CakeSearch() {
    console.log(this.cakeSearch);
    let observable = this._httpService.cakeSearch(this.cakeSearch)
    observable.subscribe(data => {
      console.log("results from search", data)
    })
  }
}
