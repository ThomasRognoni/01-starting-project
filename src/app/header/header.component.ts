import { Component } from '@angular/core';

@Component({
  selector: 'app-header', // This is the tag that will be used in HTML to include this component
  standalone: true, // This indicates that this component is a standalone component, meaning it can be used without being declared in an NgModule
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {}
