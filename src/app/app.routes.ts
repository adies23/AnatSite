import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { EmotionalTherapyComponent } from './components/emotional-therapy/emotional-therapy.component';
import { FaqComponent } from './components/faq/faq.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';
import { ChildTherapyComponent } from './components/child-therapy/child-therapy.component';
import { ParentGuidanceComponent } from './components/parent-guidance/parent-guidance.component';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'emotional-therapy', component: EmotionalTherapyComponent },
  { path: 'child-therapy', component: ChildTherapyComponent },
  { path: 'parent-guidance', component: ParentGuidanceComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' }
];
