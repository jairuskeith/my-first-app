import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://steemitimages.com/640x0/https://cdn.steemitimages.com/DQmZhNTnvdxDesWCbiqrsjb81yNrV6HNCKymZofBsugcpUN/recipe.jpeg'),
    new Recipe('A Test Recipe', 'This is simply a test', 'https://steemitimages.com/640x0/https://cdn.steemitimages.com/DQmZhNTnvdxDesWCbiqrsjb81yNrV6HNCKymZofBsugcpUN/recipe.jpeg')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
