import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildTherapyComponent } from './child-therapy/child-therapy.component';
import { ParentGuidanceComponent } from './parent-guidance/parent-guidance.component';

const routes: Routes = [
  { path: 'child-therapy', component: ChildTherapyComponent },
  { path: 'parent-guidance', component: ParentGuidanceComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 