import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { EMAILJS_CONFIG } from '../emailjs/emailjs-config';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  model = { name: '', phone: '', email: '', message: '' };
  submitted = false;
  successMessage: string = '';
  errorMessage: string = '';
  //title = 'anatsite';

  onSubmit() {
    this.submitted = true;
    /*
    this.successMessage = 'תודה! ההודעה נשלחה בהצלחה.';
    setTimeout(() => this.successMessage = '', 4000); // נעלם אחרי 4 שניות
    this.errorMessage = '';

    this.model = { name: '', phone: '', email: '', message: '' };
    this.submitted = false;
  
    //this.errorMessage = 'אירעה שגיאה בשליחת ההודעה, נסה שוב מאוחר יותר.';
    //this.successMessage = '';
    */
    
    const templateParams = {
      from_name: this.model.name,
      phone: this.model.phone,
      reply_to: this.model.email,
      message: this.model.message
    };

    emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID,
      templateParams,
      EMAILJS_CONFIG.PUBLIC_KEY
    )
    .then((response: EmailJSResponseStatus) => {
      console.log('SUCCESS!', response.status, response.text);
      this.successMessage = 'תודה! ההודעה נשלחה בהצלחה.';
      setTimeout(() => this.successMessage = '', 4000); 
      this.errorMessage = '';
      this.model = { name: '', phone: '', email: '', message: '' };
      this.submitted = false;
    }, (err) => {
      console.log('FAILED...', err);
      this.errorMessage = 'אירעה שגיאה בשליחת ההודעה, נסה שוב מאוחר יותר.';
      setTimeout(() => this.errorMessage = '', 4000);
      this.successMessage = '';
    });
    
  }
}
