import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Equipe} from '../model/Equipe';
import {DetailEq} from '../model/DetailEq';

@Injectable({
  providedIn: 'root'
})
export class DetailEquipeService {

  public url= environment.defaultUrl+'/DetailEquipeC'

  constructor(private httpClient: HttpClient) { }



  GetAllDetailEquipe()
  {
      return this.httpClient.get(`${this.url}/detailequipes`);
  }


  AddDetailEquipe(detail:any)
  {
    return this.httpClient.post(`${this.url}/addDeailEquipe`,detail)
  }



  editDetailEquipe(detail:DetailEq, id:number)
  {
    return this.httpClient.put(`${this.url}/modify-detailequipe/${id}`,detail)

  }

deleteDetailEquipe(idd : any)
{return this.httpClient.delete(`${this.url}/deleteDetailEquipe/${idd}`)}















}
