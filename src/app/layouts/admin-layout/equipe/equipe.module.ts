import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EquipeComponent } from './equipe/equipe.component';
import {EquipeRoutingModule} from './equipe-routing.module';
import { ListEquipeComponent } from './list-equipe/list-equipe.component';
import { FormEquipeComponent } from './form-equipe/form-equipe.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ListDetailComponent } from './list-detail/list-detail.component';
import { FormDetailComponent } from './form-detail/form-detail.component';
import {EquipeService} from '../../../core/Service/equipe.service';
import {DetailEquipeService} from '../../../core/Service/detail-equipe.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import { DetailComponent } from './detail/detail.component';
import {TeamComponent} from './team.component';


@NgModule({
  declarations: [
TeamComponent,
    ListEquipeComponent,
    FormEquipeComponent,
    ListDetailComponent,
    FormDetailComponent,
    DetailComponent,
      EquipeComponent
  ],
  imports: [
    CommonModule,
      EquipeRoutingModule,
      ReactiveFormsModule,
      FormsModule,
    NgbModule,
    Ng2SearchPipeModule

  ],
  providers: [
    EquipeService,
    DetailEquipeService
  ]
})
export class EquipeModule{}
