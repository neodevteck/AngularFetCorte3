import { Component, OnInit } from '@angular/core';
//import {TAREAS} from '../../tareasEjemplo'
import {Tarea} from '../../Tarea'
import {TareaService} from '../../services/tarea.service'


@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css']
})
export class TareaComponent implements OnInit {
  tareas : Tarea[] = [];
  constructor(private tareaService: TareaService) { }

  ngOnInit(): void {
    // console.log(this.tareaService.getTareas())
    this.tareaService.getTareas().subscribe( (tareas)=> this.tareas = tareas );
  }

}
