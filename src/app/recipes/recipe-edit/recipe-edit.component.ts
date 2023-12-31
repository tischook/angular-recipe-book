import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  recipeId: number;
  editMode = false;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
   
   this.route.params.subscribe(
    (params: Params) => {
       this.recipeId = +params['id'];
       this.editMode = params['id'] != null;
    }
   );
  }

}
