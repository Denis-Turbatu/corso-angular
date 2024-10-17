// import { Component, signal, computed } from '@angular/core';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type User } from './user.module';
import { CardComponent } from "../shared/card/card.component";
// import { DUMMY_USERS } from '../dummy-users';

// const randomIndex =  Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // selectedUser = signal(DUMMY_USERS[randomIndex]);  
  // imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar)

  @Input({required: true}) user!: User;
  @Input({required: true}) selectedCss!: boolean;
  @Output() selectedId = new  EventEmitter();
  @Output() selectedName = new EventEmitter();


  get imagePath(){
    return 'assets/users/' + this.user.avatar;
  }

  onSelectedUser(){
    // const randomIndex =  Math.floor(Math.random() * DUMMY_USERS.length);
    // this.selectedUser = DUMMY_USERS[randomIndex];
    // this.selectedUser.set(DUMMY_USERS[randomIndex]); 
    this.selectedId.emit(this.user.id);
  }
}
