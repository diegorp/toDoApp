import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'todoapp-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {

  @Input() toDo = '';
  @Output() completeToDo: EventEmitter<string> = new EventEmitter<string>();
  
  removeToDo() {
    this.completeToDo.emit(this.toDo);
  }
}
