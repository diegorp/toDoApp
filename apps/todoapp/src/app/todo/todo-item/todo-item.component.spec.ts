import { Component, DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { TodoItemComponent } from './todo-item.component';

@Component({
  template: '<todoapp-todo-item [toDo]="toDo" (completeToDo)="onCompleteToDo()"></todoapp-todo-item>'
})
class HostComponent {
  toDo = 'I am a fancy to do';
  onCompleteToDo = jest.fn();
}

describe('TodoItemComponent', () => {
  let hostComponent: HostComponent;
  let fixture: ComponentFixture<HostComponent>;
  let componentElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoItemComponent, HostComponent ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HostComponent);
    hostComponent = fixture.componentInstance;
    componentElement = fixture.debugElement.query(By.css('todoapp-todo-item'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(componentElement).toBeTruthy();
  });

  it('should contain the text passed as input', () => {
    const elementText = componentElement.query(By.css('p')).nativeElement.textContent;
    expect(elementText).toEqual(hostComponent.toDo);
  });

  it('should propagate the complete event', () => {
    jest.spyOn(hostComponent, 'onCompleteToDo');
    const removeButton = componentElement.query(By.css('button')).nativeElement;
    removeButton.click();
    expect(hostComponent.onCompleteToDo).toHaveBeenCalled();
  });
});
