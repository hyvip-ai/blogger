import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { FeedComponent } from './components/nav/feed/feed.component';
import { DashboardComponent } from './components/nav/dashboard/dashboard.component';
import { ReadmoreComponent } from './components/nav/readmore/readmore.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { EditComponent } from './components/nav/edit/edit.component'
import { BlogService } from './services/blog.service';
import { PublishComponent } from './components/nav/publish/publish.component';
import { MyrticleComponent } from './components/nav/myrticle/myrticle.component';
import { SavedarticlesComponent } from './components/nav/savedarticles/savedarticles.component';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FeedComponent,
    DashboardComponent,
    ReadmoreComponent,
    LoginComponent,
    RegisterComponent,
    EditComponent,
    PublishComponent,
    MyrticleComponent,
    SavedarticlesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularEditorModule
 
  ],
  providers: [BlogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
