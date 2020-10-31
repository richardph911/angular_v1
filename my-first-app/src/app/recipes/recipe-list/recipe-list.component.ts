import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test','https://bigoven-res.cloudinary.com/image/upload/d_recipe-no-image.jpg,t_recipe-256/easy-chicken-fried-rice-7.jpg'),
    new Recipe('A Test Recipe', 'This is simply a test','https://bigoven-res.cloudinary.com/image/upload/d_recipe-no-image.jpg,t_recipe-256/easy-chicken-fried-rice-7.jpg')
]; // store as a recipe array
  constructor() { }

  ngOnInit(): void {
  }

}
