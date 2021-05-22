import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BlogService } from 'src/app/services/blog.service';
import { AngularEditorConfig } from '@kolkov/angular-editor';

//  import {DomSanitizer} from '@angular/platform-browser'
 


@Component({
  selector: 'app-publish',
  templateUrl: './publish.component.html',
  styleUrls: ['./publish.component.css']
})
export class PublishComponent implements OnInit {
editorConfig: AngularEditorConfig = {
    editable: true,
      spellcheck: true,
      height: 'auto',
      minHeight: '0',
      maxHeight: 'auto',
      width: 'auto',
      minWidth: '0',
      translate: 'yes',
      enableToolbar: true,
      showToolbar: true,
      placeholder: 'Enter text here...',
     
      fonts: [
        {class: 'arial', name: 'Arial'},
        {class: 'times-new-roman', name: 'Times New Roman'},
        {class: 'calibri', name: 'Calibri'},
        {class: 'comic-sans-ms', name: 'Comic Sans MS'},
        {class:'cursive', name:'cursive'}
      ],
      customClasses: [
    
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'Subheading',
        class: 'subheading',
        tag:'h4'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
      {
      name:'coding',
      class:'coding',
      tag:'p'
      },
      {
        name:'middle',
      class:'middle'
      },
        {
        name:'right',
      class:'right'
      },
    ],
    uploadUrl: 'v1/image',
    uploadWithCredentials: false,
    sanitize: false,
    toolbarPosition: 'top',
 
};
 


  constructor(private service:BlogService,private router:Router) { }
  myform = new FormGroup({
  myhtml:new FormControl('',[Validators.required])
  })
  ngOnInit(): void {
  }
  blogdata:any = null
  publish(){
     
     this.service.postblog(this.myform.value).subscribe(res=>{
     console.log(res);
     setTimeout(()=>{
      this.router.navigate(['/Home/myarticles'])
    },4000);
     })

  }

}
