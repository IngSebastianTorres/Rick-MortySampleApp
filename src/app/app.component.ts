import { Component, OnInit } from '@angular/core';
import { PersonajesService } from './servicios/personajes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  private arrPersonajes:any[];
  currentPage:number;
  numPages:number;


  constructor(private personajesService:PersonajesService){
      this.currentPage=1;
  }

  get personajes(){
    return this.arrPersonajes;
  }

  async ngOnInit(){
    try{
      let response= await this.personajesService.getAll();
      this.arrPersonajes =response.results;
      this.numPages=response.info.pages;
      console.log(this.arrPersonajes);
    }catch(error){
      console.log(error);
    }
    
  }

  async changePage(siguiente){
    if(siguiente){
      this.currentPage++;
    } else {
      this.currentPage--;
    }
    let response = await this.personajesService.getAll(this.currentPage);
    this.arrPersonajes=response.results;
  }

}
