import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from 'src/app/services/blog.service';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser'


@Component({
  selector: 'app-readmore',
  templateUrl: './readmore.component.html',
  styleUrls: ['./readmore.component.css']
})
export class ReadmoreComponent implements OnInit {


  constructor(private router:Router,private activatedroutes:ActivatedRoute,private service:BlogService,private domSanitize:DomSanitizer) { }
  myblog:any = null
  mysafehtml:SafeHtml  = ''
  ngOnInit(): void {
    this.service.getdetails(this.activatedroutes.snapshot.params.id).subscribe(res=>{
      console.log(res)
      this.myblog = res;
     
       this.mysafehtml = this.transform(this.myblog.blog.innerhtml)
      // this.mysafehtml = this.transform(this.myblog.blog.innerhtml)
  
      // console.log(res)
    },err=>{this.router.navigate(['/Login'])})
  }
  savedblog(id:any){
    this.service.saveblog(id).subscribe(res=>{
      console.log(res)
    })
  }
  transform(html:any):SafeHtml{
    return this.domSanitize.bypassSecurityTrustHtml(html);
  }

}
