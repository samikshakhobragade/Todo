import { Component, EventEmitter, Output,Input } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  title:any[string];
  desc:any[string];
  @Input() todo:any=Todo;
  @Output() todoAdd=new EventEmitter<Todo>();



onSubmit(){
  const todo={
    sno:8,
    title:this.title,
    desc:this.desc,
    active:0
  }
  console.log(todo);
  this.todoAdd.emit(todo);
}
}
