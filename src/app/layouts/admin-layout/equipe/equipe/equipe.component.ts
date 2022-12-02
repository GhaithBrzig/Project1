import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Equipe} from '../../../../core/model/Equipe';


@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.component.html',
  styleUrls: ['./equipe.component.css']
})
export class EquipeComponent implements OnInit {
  @Input() equipe : Equipe
  @Output() notification: EventEmitter<Equipe> = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  notifyDeleteEquipe() {
    this.notification.emit(this.equipe)
  }
}
