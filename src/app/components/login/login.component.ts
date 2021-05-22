import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  messege:any = null
  constructor(private router:Router,private service:BlogService) { }
  loginform = new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required])
  })
  ngOnInit(): void {
  }
  login(){
    this.service.login(this.loginform.value).subscribe(res=>{
      this.messege = res;
      // console.log(this.messege)
      // console.log(this.messege.token)
      localStorage.setItem('token',this.messege.token)
      if(this.messege.messege=='Login Success'){
        setTimeout(() => {
          this.router.navigate(['/Home/dashboard'])
        }, 4000);
      }

    }) 
  }
  gotoregister(){
    this.router.navigate(['/Register'])
  }



}
