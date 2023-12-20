import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'menu',
    component:MenuComponent
  },
  {
    path:'feedback',
    component:FeedbackComponent
  },
  {
    path:'contact-us',
    component:ContactUsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
