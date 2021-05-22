import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  logout(){
    localStorage.removeItem('token')
    this.router.navigate(['/Login'])
  }
  dashboard(){
    this.router.navigate(['/Home/dashboard'])
  }

  Publish(){
    this.router.navigate(['/Home/publish'])
  }
  myarticles(){
    this.router.navigate(['/Home/myarticles'])
  }
  gohome(){
    this.router.navigate(['/Home/feed'])
  }
  gotosaved(){
    this.router.navigate(['/Home/SavedArticles'])
  }

}
