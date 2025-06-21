import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { RehabilitationComponent } from './components/therapeutic-approach/rehabilitation/rehabilitation.component';
import { ChildrenComponent } from './components/therapeutic-approach/children/children.component';
import { FaqComponent } from './components/faq/faq.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { 
    path: 'therapeutic-approach', 
    children: [
      { path: 'rehabilitation', component: RehabilitationComponent },
      { path: 'children', component: ChildrenComponent }
    ]
  },
  { path: 'faq', component: FaqComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' }
];
