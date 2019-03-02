import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { DataService }  from '../services/data/data.service';
import { ingredient } from '../ingredient';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  public recipe;

  public ingredients: [];

  public steps: [];

  getSteps(){
    this.steps = this.recipe.step;
  }

  getIngredients(){
      this.ingredients = this.recipe.ingredient;
  }

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private location: Location
  ) { }

  ngOnInit(): void {

    this.getRecipe();

    this.getIngredients();
    
    this.getSteps();
  }

  getRecipe(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.recipe = this.dataService.getRecipe(id);
  }
}
