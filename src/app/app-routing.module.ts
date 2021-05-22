import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/nav/dashboard/dashboard.component';
import { EditComponent } from './components/nav/edit/edit.component';
import { FeedComponent } from './components/nav/feed/feed.component';
import { MyrticleComponent } from './components/nav/myrticle/myrticle.component';
import { NavComponent } from './components/nav/nav.component';
import { PublishComponent } from './components/nav/publish/publish.component';
import { ReadmoreComponent } from './components/nav/readmore/readmore.component';
import { SavedarticlesComponent } from './components/nav/savedarticles/savedarticles.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {
    path:'',pathMatch:'full',redirectTo:'Register'
  },
  {
    path:'Register',component:RegisterComponent
  },
  {
    path:'Login',component:LoginComponent,
  },
  {
    path:'Home',component:NavComponent,children:[
      {
        path:'feed',component:FeedComponent
      },
      {
        path:'dashboard',component:DashboardComponent
      },
      {
        path:'description/:id',component:ReadmoreComponent
      },
      {
        path:'edit/:id',component:EditComponent
      },
      {
        path:'publish',component:PublishComponent
      },
      {
        path:'myarticles',component:MyrticleComponent
      },
      {
        path:'SavedArticles',component:SavedarticlesComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
