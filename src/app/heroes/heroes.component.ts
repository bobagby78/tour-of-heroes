import { Component, OnInit } from '@angular/core';  
import { Hero } from '../hero';

@Component({     
  selector: 'app-heroes',    
  templateUrl: './heroes.component.html',    
  styleUrls: ['./heroes.component.css']    
})

export class HeroesComponent implements OnInit { 
  // hero = 'Windstorm'  !!! in this old line of code, hero was the variable, the name was Windstorm. It was displayed on the view as a string
  hero: Hero = { //the new code declares a variable and says it's of the Hero interface (kinda like a class)
    id: 1,
    name: 'Windstorm'
  };

  constructor() {  

  }

  ngOnInit() {

  }

}
