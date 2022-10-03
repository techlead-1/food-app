import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {

  constructor() { }

  //recipe categories
  mainCourse() {}

  sideDish() {}

  dessert() {}

  appetizer() {}

  salad() {}

  breakfast() {}

  soup() {}

  sauce() {}

  snack() {}

  drinks() {}

  ngOnInit(): void {
  }

}
