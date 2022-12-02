import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {DetailEq} from '../../../../core/model/DetailEq';
import {DetailEquipeService} from '../../../../core/Service/detail-equipe.service';
import {EquipeService} from '../../../../core/Service/equipe.service';


@Component({
  selector: 'app-form-detail',
  templateUrl: './form-detail.component.html',
  styleUrls: ['./form-detail.component.css']
})
export class FormDetailComponent implements OnInit {
  id:number;
    ide:number;
    btn:String;
    editMode = false;
  list: DetailEq[];
  public detail: DetailEq;
  constructor(private route:ActivatedRoute,private detailService:DetailEquipeService,private equipeService: EquipeService,private router:Router) { }

  ngOnInit(): void {
      this.detailService.GetAllDetailEquipe().subscribe(
          (data:DetailEq[])=>{
              this.list=data;
              this.route.params.subscribe((params: Params) => {
                      this.id = +params['id'];
                      console.log(params)
                      this.editMode = params['id'] != null;
                      if (this.editMode) {
                          this.detail = this.list.find(u => u.idDetailEquipe == this.id)!;
                          this.btn = "Update"
                      } else {
                          this.ide = +params['ide']
                          this.detail = new DetailEq()
                          this.btn = "Add"
                      }
                  },
                  () => { console.log('error') },
                  () => {  }
              )
          }
      )

  }


  saveDetail(){
    if(this.btn=='Add') {
      this.equipeService.addDetails(this.detail,this.ide).subscribe(
          () => {
            this.router.navigate(['equipe/detailEquipe']).then(() => {
              window.location.reload();
            });
          }
      )
    } else {
      this.detailService.editDetailEquipe(this.detail,this.id).subscribe(
          ()=>{
            this.router.navigate(['equipe/detailEquipe']).then(() => {
              window.location.reload();
            });
          }
      )

    }

  }
  Back() {
    this.router.navigate(['equipe/detailEquipe'])
  }
}
