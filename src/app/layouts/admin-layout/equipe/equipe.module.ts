import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EquipeComponent } from './equipe.component';
import {EquipeRoutingModule} from './equipe-routing.module';
import { ListEquipeComponent } from './list-equipe/list-equipe.component';
import { FormEquipeComponent } from './form-equipe/form-equipe.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ListDetailComponent } from './list-detail/list-detail.component';
import { FormDetailComponent } from './form-detail/form-detail.component';


@NgModule({
  declarations: [
    EquipeComponent,
    ListEquipeComponent,
    FormEquipeComponent,
    ListDetailComponent,
    FormDetailComponent
  ],
  imports: [
    CommonModule,
      EquipeRoutingModule,
      ReactiveFormsModule,
      FormsModule

  ]
})
export class EquipeModule { }
