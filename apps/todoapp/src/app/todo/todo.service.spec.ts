import { TestBed } from '@angular/core/testing';

import { ToDoService } from './todo.service';

describe('ToDoService', () => {
  let service: ToDoService;

  const TODO = 'I am a to do';

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToDoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add a to do and propagate it', (done) => {
    service.getToDo().subscribe((toDo) => {
      expect(toDo).toEqual(TODO);
      done();
    });

    service.addToDo(TODO);
  });
});
