import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogService } from 'src/app/services/blog.service';
import {Pipe , PipeTransform} from '@angular/core'


@Component({
  selector: 'app-savedarticles',
  templateUrl: './savedarticles.component.html',
  styleUrls: ['./savedarticles.component.css']
})



export class SavedarticlesComponent implements OnInit {
  myblogs:any = null
  constructor(private router:Router,private service:BlogService) { }

  ngOnInit(): void {
    this.service.getsaved().subscribe(res=>{
      console.log(res);
      this.myblogs = res
   

    },err=>{this.router.navigate(['/Login'])})
  }
  deletesavedarticle(id:any){
    console.log('asche')
   this.service.deletesavedblog(id).subscribe(res=>{
     console.log(res)
   })
  }

  readmore(id:any){
    this.router.navigate([`Home/description/${id}`])
  }

}
