import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ToDoService } from '../todo.service';

@Component({
  selector: 'todoapp-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit, OnDestroy {

  toDoList: string[] = [];
  
  private toDoSubscription: Subscription | undefined;

  constructor(private readonly toDoService: ToDoService) {}

  ngOnInit(): void {
      this.toDoSubscription = this.toDoService.getToDo()
        .subscribe(toDo => this.toDoList.push(toDo));
  }

  ngOnDestroy(): void {
      if (this.toDoSubscription) {
        this.toDoSubscription.unsubscribe();
      }
  }

  onCompleteToDo(toDo: string) {
    this.toDoList = this.removeToDoFromList(toDo);
  }

  private removeToDoFromList(toDo: string) {
    return this.toDoList.filter(toDoListItem => toDoListItem !== toDo);
  }
}
