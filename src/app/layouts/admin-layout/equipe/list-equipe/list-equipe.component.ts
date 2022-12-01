
import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Equipe} from '../../../../core/model/Equipe';
import {EquipeService} from '../../../../core/Service/equipe.service';

@Component({
  selector: 'app-list-equipe',
  templateUrl: './list-equipe.component.html',
  styleUrls: ['./list-equipe.component.css']
})
export class ListEquipeComponent implements OnInit {
  public equipes: Equipe[];
  public equipesList: Equipe[];
  public length: number;
  public page = 1;
  public pageSize=2;
  searchText: any;
  constructor(private equipeService: EquipeService, private router:Router) { }

  ngOnInit(): void {
    this.equipeService.GetAllEquipe().subscribe(
        (data:Equipe[]) => {
          this.equipes=data;
          console.log(this.equipes);
        },
        () => { console.log('error') },
        () => {   this.equipesList = this.equipes;
          this.length = this.equipesList.length;
        }
    );
  }

  deleteEquipe(equipe: Equipe) {
    let i = this.equipesList.indexOf(equipe);
    if(confirm("Are you sure to delete "+equipe.nomEquipe)) {
      this.equipeService.deleteEquipe(equipe.idEquipe).subscribe(
          ()=>{
            this.equipesList.splice(i,1)
          }
      )

    }


  }

}
