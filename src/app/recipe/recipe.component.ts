import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {

  constructor(private fetch: RecipeService) { }

  recipes: any;
  food: any;
  data:any;
  error:string = 'Request Failed: please try again later. If this continues contact the developer by clicking on the navigation link "Developer"'
  timeout:string = 'Request Timeout: please try again later and if the problem continues, contact the developer by clicking on the navigation link "Developer'
  
  
  //recipe categories
  mainCourse() {
    this.fetch.getMainCourse().subscribe(
      (response) => {
        this.recipes = response;
        this.food = this.recipes.searchResults;
        this.data = this.food[0].results
      },
      (error) => {alert(this.error)}
    )
  }

  sideDish() {
    this.fetch.getSideDishes().subscribe(
      (response) => {
        this.recipes = response;
        this.food = this.recipes.searchResults;
        this.data = this.food[0].results
      },
      (error) => {alert(this.error)}
    )
  }

  dessert() {
    this.fetch.getDessert().subscribe(
      (response) => {
        this.recipes = response;
        this.food = this.recipes.searchResults;
        this.data = this.food[0].results
      },
      (error) => {alert(this.error)}
    )
  }

  appetizer() {
    this.fetch.getAppetizer().subscribe(
      (response) => {
        this.recipes = response;
        this.food = this.recipes.searchResults;
        this.data = this.food[0].results
      },
      (error) => {alert(this.error)}
    )
  }

  salad() {
    this.fetch.getSalad().subscribe(
      (response) => {
        this.recipes = response;
        this.food = this.recipes.searchResults;
        this.data = this.food[0].results
      },
      (error) => {alert(this.error)}
    )
  }

  breakfast() {
    this.fetch.getBreakfast().subscribe(
      (response) => {
        this.recipes = response;
        this.food = this.recipes.searchResults;
        this.data = this.food[0].results
      },
      (error) => {alert(this.error)}
    )
  }

  soup() {
    this.fetch.getSoup().subscribe(
      (response) => {
        this.recipes = response;
        this.food = this.recipes.searchResults;
        this.data = this.food[0].results
      },
      (error) => {alert(this.error)}
    )
  }

  sauce() {
    this.fetch.getSauce().subscribe(
      (response) => {
        this.recipes = response;
        this.food = this.recipes.searchResults;
        this.data = this.food[0].results
      },
      (error) => {alert(this.error)}
    )
  }

  snack() {
    this.fetch.getSnack().subscribe(
      (response) => {
        this.recipes = response;
        this.food = this.recipes.searchResults;
        this.data = this.food[0].results
      },
      (error) => {alert(this.error)}
    )
  }

  drinks() {
    this.fetch.getDrink().subscribe(
      (response) => {
      this.recipes = response;
        this.food = this.recipes.searchResults;
        this.data = this.food[0].results},
      (error) => {alert(this.error)}
    )
  }

  ngOnInit(): void {
    this.fetch.getDishes().subscribe(
      (response) => {
        this.recipes = response;
        this.food = this.recipes.searchResults;
        this.data = this.food[0].results
      },
      (error) => {alert(this.error)}
    )
  }

}
