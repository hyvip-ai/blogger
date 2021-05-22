import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { BlogService } from 'src/app/services/blog.service';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser'

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
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

  constructor(private router:Router,private activatedroutes:ActivatedRoute,private sevices:BlogService,private domSanitize:DomSanitizer) { }
  myform = new FormGroup({
    myhtml:new FormControl('',[Validators.required])
    })
      fulldata:any = null
     blogdata:any = ''
     mysafehtml:SafeHtml = ''


  ngOnInit(): void {
    this.sevices.getdetails(this.activatedroutes.snapshot.params.id).subscribe(res=>{
      this.fulldata = res
      this.blogdata = this.fulldata.blog.innerhtml
       this.mysafehtml = this.transform(this.fulldata.blog.innerhtml);
    })
  }

  edit(){
    var myid  = this.activatedroutes.snapshot.params.id
    this.sevices.editblog(myid,this.myform.value).subscribe(res=>{
      // console.log('Done')
      console.log(res)
    })
    // console.log(myid)
  }
  transform(html:any):SafeHtml{
    return this.domSanitize.bypassSecurityTrustHtml(html);
  }

}
