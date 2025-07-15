import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from './user.model';
import { CardComponent } from "../shared/card/card.component"; // Import the User interface

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  imports: [CardComponent],
})
export class UserComponent {
  @Input({ required: true }) user!: User; // Use Input decorator to receive data from parent component
  @Input({ required: true }) selected!: boolean; // Optional input to indicate if the user is selected
  @Output() select = new EventEmitter<string>(); // Use Output decorator to emit events to parent component

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
