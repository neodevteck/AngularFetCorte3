import { Component, OnInit,Input } from '@angular/core';
import {Tarea} from '../../Tarea'
import { faCheck,faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-item-tarea',
  templateUrl: './item-tarea.component.html',
  styleUrls: ['./item-tarea.component.css']
})
export class ItemTareaComponent implements OnInit {
  @Input() tarea!:Tarea;
  faCheck = faCheck;
  faTimes = faTimes;

 
  constructor() { }

  ngOnInit(): void {
  }

}
