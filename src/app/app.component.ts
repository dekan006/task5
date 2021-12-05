import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user = "Denis";
 

  setNewUserName(elem: any) {
    this.user = elem;
  }

  
     users = [
    {
    firstName: 'Ivan',
    lastName: 'Petrov',
    age: 29,
    },
    {
    firstName: 'Dima',
    lastName: 'Sokolov',
    age: 26,
    },
    {
    firstName: 'Viktor',
    lastName: 'Ivanov',
    age: 31,
    },
    {
    firstName: 'Buinov',
    lastName: 'Petr',
    age: 34,
    },
    {
    firstName: 'Gazmanov',
    lastName: 'Jura',
    age: 24,
    }
    ];

    addUser(elem: any) {
      this.users.push({firstName : elem, lastName: elem, age: elem})
    }
}
