import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {
  
  private readonly toDo = new Subject<string>();

  getToDo(): Observable<string> {
    return this.toDo.asObservable();
  }

  addToDo(newToDo: string) {
    this.toDo.next(newToDo);
  }
}
