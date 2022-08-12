import { Component } from '@angular/core';
import { Todo } from 'src/models/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public todos: Todo[] = []; //----definido como Vazio//
//  public todos: any[]; ---definido como Udefined--//
public title: string='Minhas Tarefas'
constructor() {
  this.todos.push(new Todo(1, 'Oração', false));
  this.todos.push(new Todo(2,'Estudos', false));
  this.todos.push(new Todo(3,'Compromisso Familiar',true));
 
}
  remove(todo: Todo) {
const index = this.todos.indexOf(todo);
if(index !== -1){
this.todos.splice(index,1);
}
  }

  markAsDone() {
  
  }
  markAsUndone() {
  
  }

}
