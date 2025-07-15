import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from './tasks/tasks.component';


@Component({
  selector: 'app-root', //tell angular which html tag will get replaced by this component
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUserId?: string;

  onSelectUser(id: string) {
    this.selectedUserId = id;
    console.log('User selected:', id);
  }

  get selectedUser() {
    return this.users.find((u) => u.id === this.selectedUserId) ?? null;
  }
}
