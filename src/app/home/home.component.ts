import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data/data.service';
import { RECIPES } from '../recipes';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor(
    private data: DataService
  ) { }

  recipes = RECIPES;

  ngOnInit(
    
  ) {
  }

}
