import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-myrticle',
  templateUrl: './myrticle.component.html',
  styleUrls: ['./myrticle.component.css']
})
export class MyrticleComponent implements OnInit {
  myblogs:any = null;
  constructor(private service:BlogService,private router:Router,private activatedroutes:ActivatedRoute) { }

  ngOnInit(): void {
    this.service.getmyarticles().subscribe(res=>{
      console.log(res)
      this.myblogs = res
    },err=>{this.router.navigate(['/Login'])})
  }
  deletearticle(id:any){
    console.log('asche')
   this.service.deleteblog(id).subscribe(res=>{
     console.log(res)
   })
  }

  readmore(id:any){
    this.router.navigate([`Home/description/${id}`])
  }
  edit(id:any){
    this.router.navigate([`/Home/edit/${id}`])
  }

}
