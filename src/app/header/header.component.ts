import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isSideNavOpen = false;

  navLinks = [
    { label: 'דף הבית', path: '/', exact: true },
    { label: 'אודות', path: '/about' },
    {
      label: 'טיפול',
      dropdown: true,
      children: [
        { label: 'טיפול רגשי', path: '/emotional-therapy' },
        { label: 'טיפול בילדים', path: '/child-therapy' },
        { label: 'הדרכת הורים', path: '/parent-guidance' }
      ]
    },
    { label: 'שאלות נפוצות', path: '/faq' },
    { label: 'צור קשר', anchor: 'footer' }
  ];

  openSideNav() {
    this.isSideNavOpen = true;
  }

  closeSideNav() {
    this.isSideNavOpen = false;
  }

  toggleSideNav() {
    this.isSideNavOpen = !this.isSideNavOpen;
  }

  scrollToFooter(event: Event) {
    event.preventDefault();
    window.location.hash = 'footer';
    const footer = document.getElementById('footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
    this.closeSideNav();
  }

  isMobile(): boolean {
    return window.innerWidth <= 991.98;
  }
} 