import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoBuilderComponent } from './todo-builder/todo-builder.component';



@NgModule({
  declarations: [
    TodoItemComponent,
    TodoListComponent,
    TodoBuilderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TodoListComponent,
    TodoBuilderComponent
  ]
})
export class TodoModule { }
