
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registrationform = new FormGroup({
    name:new FormControl('',[Validators.required]),
    username:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required])
  })
  constructor(private services:BlogService,private router:Router) { }
  mymessege:any = null
  ngOnInit(): void {
  }

  Submit(){
    // console.log(this.registrationform.value);
    this.services.register(this.registrationform.value).subscribe(res=>{
      // console.log(res)
      this.mymessege = res
      if(this.mymessege.messege=='Register Success Redirecting to Login page'){
        setTimeout(() => {
          this.router.navigate(['/Login'])
        }, 4000);
      }
    })

  }

  gotologin(){
    this.router.navigate(['/Login'])
  }
}
