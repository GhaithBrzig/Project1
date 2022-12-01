import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Equipe} from '../../../../core/model/Equipe';
import {EquipeService} from '../../../../core/Service/equipe.service';

@Component({
  selector: 'app-form-equipe',
  templateUrl: './form-equipe.component.html',
  styleUrls: ['./form-equipe.component.css']
})
export class FormEquipeComponent implements OnInit {
  teamForm: FormGroup;
  id: number;
  list:Equipe[];
  editMode = false;
  mode:String;
  pattern="^[ a-zA-Z][a-zA-Z ]*$";


  constructor(private route: ActivatedRoute, private teamService: EquipeService, private router: Router) {
  }

  ngOnInit(): void {
    this.teamService.GetAllEquipe().subscribe(
        (data:Equipe[])=>{
          this.list=data;
          this.route.params.subscribe((params: Params) => {
                this.id = +params['id'];
                console.log(params)
                this.editMode = params['id'] != null;
                if (this.editMode) {
                  this.mode = "Update"
                } else {
                  this.mode = "Add"
                }
                this.initForm()
                console.log(this.teamForm)
              },
              () => { console.log('error') },
              () => {  }
          )
        }
    )
  }

  private initForm() {
    let teamName = '';
    let teamLevel = '';
    let teamImage = '';


    if(this.editMode) {
      const team = this.list.find(u => u.idEquipe == this.id)!
      teamName = team.nomEquipe
      teamLevel = team.niveau
      teamImage = team.image

    }
    this.teamForm = new FormGroup({
      'nomEquipe': new FormControl(teamName,[ Validators.required,Validators.pattern(this.pattern),Validators.minLength(3)]),
      'niveau': new FormControl(teamLevel, Validators.required),
      'image': new FormControl(teamImage, Validators.required),

    })
  }

  Back() {
    this.router.navigate(['/equipe'])
  }

  onSubmit() {
    if (this.editMode) {
      this.teamService.editEquipe(this.teamForm.value, this.id).subscribe()

    } else {
      this.teamService.AddEquipe(this.teamForm.value).subscribe()
    }
    this.router.navigate(['/equipe'])
  }
}
