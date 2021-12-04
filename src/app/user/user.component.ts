import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  
  @Input()
  user ='';

  @Output() 
  userNameChanged = new EventEmitter();

  setNewUserName(elem: any) {
    this.user = elem;
    this.userNameChanged.emit(this.user)
  }

  constructor() { }
}
