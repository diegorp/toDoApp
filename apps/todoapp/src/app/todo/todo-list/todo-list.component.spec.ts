import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Subject } from 'rxjs';
import { ToDoService } from '../todo.service';

import { TodoListComponent } from './todo-list.component';

jest.mock('../todo.service');

describe('TodoListComponent', () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;
  let toDoService: ToDoService;

  const toDoSubjectMock = new Subject<string>();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoListComponent ],
      providers: [ ToDoService ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;
    toDoService = TestBed.inject(ToDoService);
    jest.spyOn(toDoService, 'getToDo').mockReturnValue(toDoSubjectMock.asObservable());

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add a to do', () => {
    toDoListLengthIs(0);
    toDoSubjectMock.next('To Do 1');
    toDoListLengthIs(1);
    toDoSubjectMock.next('To Do 2');
    toDoListLengthIs(2);
  });

  it('should remove a to do', () => {
    toDoListLengthIs(0);
    toDoSubjectMock.next('To Do 1');
    toDoListLengthIs(1);
    fixture.detectChanges();
    component.onCompleteToDo('To Do 1');
    toDoListLengthIs(0);
  });

  it('should render an empty list', () => {
    toDoListLengthIs(0);
    expect(fixture.nativeElement).toMatchSnapshot();
  });

  it('should render a list', () => {
    toDoSubjectMock.next('To Do 1');
    toDoSubjectMock.next('To Do 2');
    fixture.detectChanges();
    expect(fixture.nativeElement).toMatchSnapshot();
  });

  function toDoListLengthIs(expectedLength: number) {
    expect(component.toDoList.length).toEqual(expectedLength);
  }
});
