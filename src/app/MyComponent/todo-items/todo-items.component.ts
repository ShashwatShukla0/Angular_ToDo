import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.css']
})
export class TodoItemsComponent {

  @Input()
  todo: Todo = new Todo;
  @Input()
  i: number|undefined;

  @Output()
  todoDelete: EventEmitter<Todo> = new EventEmitter();    //EventEmitter to emit the todo event
  @Output() 
  todoCheckb: EventEmitter<Todo> = new EventEmitter(); 

  onClick(todo: Todo) {
    this.todoDelete.emit(todo);
    console.log("Delete Method");
  }
  onCheckbox(todo:Todo) {
  
    this.todoCheckb.emit(todo);
  }
}
