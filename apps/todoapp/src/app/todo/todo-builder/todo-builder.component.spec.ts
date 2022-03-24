import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ToDoService } from '../todo.service';

import { TodoBuilderComponent } from './todo-builder.component';

jest.mock('../todo.service');

describe('TodoBuilderComponent', () => {
  let component: TodoBuilderComponent;
  let fixture: ComponentFixture<TodoBuilderComponent>;
  let toDoService: ToDoService;
  
  const toDoText = 'Get some coffee';

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoBuilderComponent ],
      providers: [ ToDoService ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    toDoService = TestBed.inject(ToDoService);
    jest.spyOn(toDoService, 'addToDo');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update the to do', () => {
    const inputElement = fixture.debugElement.query(By.css('input'));
    inputElement.nativeElement.value = toDoText;
    inputElement.nativeElement.dispatchEvent(new Event('input'));
    expect(component.toDo).toEqual(toDoText);
  });

  it('should send the value in the input field to the toDoService after clicking on add button', () => {
    const inputElement = fixture.debugElement.query(By.css('input'));
    inputElement.nativeElement.value = toDoText;
    inputElement.nativeElement.dispatchEvent(new Event('input'));
    const buttonElement = fixture.debugElement.query(By.css('button'));
    buttonElement.nativeElement.click();
    expect(toDoService.addToDo).toHaveBeenCalledWith(toDoText);
  });

  it('should render the component', () => {
    expect(fixture.debugElement.nativeElement).toMatchSnapshot();
  });
});
