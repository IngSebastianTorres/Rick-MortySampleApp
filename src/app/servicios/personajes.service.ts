import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  private baseUrl:string;
  
  constructor(private httpClient:HttpClient) { 
    this.baseUrl= " https://rickandmortyapi.com/api";
  }



  async getAll(page?):Promise<any>{
      return await firstValueFrom(this.httpClient.get<any>(this.baseUrl+"/character?page="+page));
  }


}
