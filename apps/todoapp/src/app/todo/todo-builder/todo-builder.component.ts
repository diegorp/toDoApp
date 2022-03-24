import { Component } from '@angular/core';
import { ToDoService } from '../todo.service';

@Component({
  selector: 'todoapp-todo-builder',
  templateUrl: './todo-builder.component.html',
  styleUrls: ['./todo-builder.component.css']
})
export class TodoBuilderComponent {

  toDo = '';

  constructor(private readonly toDoService: ToDoService) {}

  updateToDo(possibleToDo: any) {
    this.toDo = possibleToDo?.target?.value;
  }

  addToDo() {
    this.toDoService.addToDo(this.toDo);
    this.toDo = '';
  }
}
