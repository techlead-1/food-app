import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private http: HttpClient) { }

  //api endpoints
  defaulEndpoint: string = 'https://api.spoonacular.com/food/search?apiKey=337c6995ce284e6d9f15bfa245279bf5&query=cake&limit=50'
  mainCourse: string = 'https://api.spoonacular.com/food/search?apiKey=337c6995ce284e6d9f15bfa245279bf5&query=main%20course&limit=50'
  sideDish: string = 'https://api.spoonacular.com/food/search?apiKey=337c6995ce284e6d9f15bfa245279bf5&query=side%20dish&limit=50'
  dessert: string = 'https://api.spoonacular.com/food/search?apiKey=337c6995ce284e6d9f15bfa245279bf5&query=dessert&limit=50'
  appetizer: string = 'https://api.spoonacular.com/food/search?apiKey=337c6995ce284e6d9f15bfa245279bf5&query=appetizer&limit=50'
  salad: string = 'https://api.spoonacular.com/food/search?apiKey=337c6995ce284e6d9f15bfa245279bf5&query=salad&limit=50'
  drink: string = 'https://api.spoonacular.com/food/search?apiKey=337c6995ce284e6d9f15bfa245279bf5&query=drink&limit=50'
  breakfast: string = 'https://api.spoonacular.com/food/search?apiKey=337c6995ce284e6d9f15bfa245279bf5&query=breakfast&limit=50'
  soup: string = 'https://api.spoonacular.com/food/search?apiKey=337c6995ce284e6d9f15bfa245279bf5&query=soup&limit=50'
  snack: string = 'https://api.spoonacular.com/food/search?apiKey=337c6995ce284e6d9f15bfa245279bf5&query=snack&limit=50'
  sauce: string = 'https://api.spoonacular.com/food/search?apiKey=337c6995ce284e6d9f15bfa245279bf5&query=sauce&limit=50'


  //get dishes services
  getDishes():Observable<any> {
    return this.http.get(this.defaulEndpoint)
  }

  //main course service
  getMainCourse():Observable<any> {
    return this.http.get(this.mainCourse)
  }

  //side dishes service
  getSideDishes():Observable<any> {
    return this.http.get(this.sideDish)
  }

  //dessert service
  getDessert():Observable<any> {
    return this.http.get(this.dessert)
  }

  //appetizer service
  getAppetizer():Observable<any> {
    return this.http.get(this.appetizer)
  }

  //salad service
  getSalad():Observable<any> {
    return this.http.get(this.salad)
  }

  //drink service
  getDrink():Observable<any> {
    return this.http.get(this.drink)
  }

  //breakfast service
  getBreakfast():Observable<any> {
    return this.http.get(this.breakfast)
  }

  //soup service
  getSoup():Observable<any> {
    return this.http.get(this.soup)
  }

  //snack service
  getSnack():Observable<any> {
    return this.http.get(this.snack)
  }

  //sauce service
  getSauce():Observable<any> {
    return this.http.get(this.sauce)
  }
}
