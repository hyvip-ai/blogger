import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router:Router,private service:BlogService) { }
  mydata:any = null
  numofarticles:any = null
  ngOnInit(): void {
    this.service.getuser().subscribe(res=>{
      this.mydata = res;
      console.log(this.mydata)
    },err=>{this.router.navigate(['/Login'])})
    this.service.getmyarticles().subscribe(res=>{
      this.numofarticles = res;
      this.numofarticles = this.numofarticles.publish.length
    })
  }

  gotopublish(){
    this.router.navigate(['/Home/publish'])
  }

  myarticles(){
    this.router.navigate(['/Home/myarticles'])
  }

  gotosaved(){
    this.router.navigate(['/Home/SavedArticles'])
  }

}
