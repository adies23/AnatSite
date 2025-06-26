import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
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
