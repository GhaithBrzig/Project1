import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Equipe} from '../model/Equipe';
import {DetailEq} from '../model/DetailEq';

@Injectable({
  providedIn: 'root'
})
export class EquipeService {

  public url= environment.defaultUrl+'/Equipe'

  constructor(private httpClient: HttpClient) { }



  GetAllEquipe()
  {
    return this.httpClient.get(`${this.url}/equipe`);
  }


  AddEquipe(equipe:any)
  {
    return this.httpClient.post(`${this.url}/add-equipe`,equipe)
  }



  editEquipe(equipe:Equipe, id:number)
  {
    return this.httpClient.put(`${this.url}/modify-equipe/${id}`,equipe)

  }

  deleteEquipe(ide : any)
  {return this.httpClient.delete(`${this.url}/deleteEquipe/${ide}`)}



  addDetails(details:DetailEq,id:number) {

    return this.httpClient.put(`${this.url}/addDetails/${id}`,details)
  }











}
