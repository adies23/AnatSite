import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, CommonModule, FormsModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'anatsite';

  model: any = {};
  submitted = false;

  onSubmit() {
    this.submitted = true;
    // Handle form submission logic, e.g., sending data to a backend service
    console.log('Form Submitted!', this.model);
    // Here you would typically make an HTTP POST request to your .NET backend
  }
}
