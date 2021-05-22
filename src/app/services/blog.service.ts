import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http:HttpClient) { }

  register(body:any){
    return this.http.post('http://localhost:3000/api/register',body,{
      headers:new HttpHeaders({
        'Access-Control-Allow-Origin':'*',
        'content-type':'application/json'
      })
    })
  }

  login(body:any){
    return this.http.post('http://localhost:3000/api/login',body,{
      headers:new HttpHeaders({
        'Access-Control-Allow-Origin':'*',
        'content-type':'application/json'
      })
    })
  }

  
  getuser(){
    var token:any = localStorage.getItem('token')
    return this.http.get('http://localhost:3000/api/getuser',{
      headers:new HttpHeaders({
        'Access-Control-Allow-Origin':'*',
        'content-type':'application/json',
        'auth':token
      })
    })
  }

  postblog(body:any){
    var token:any = localStorage.getItem('token')
    return this.http.post('http://localhost:3000/api/publish',body,{
      headers:new HttpHeaders({
        'Access-Control-Allow-Origin':'*',
        'content-type':'application/json',
        'auth':token
      })
    })
  }

  getmyarticles(){
    var token:any = localStorage.getItem('token')

    return this.http.get('http://localhost:3000/api/myblogs',{
      headers:new HttpHeaders({
        'Access-Control-Allow-Origin':'*',
        'content-type':'application/json',
        'auth':token
      })
    })
  }

  deleteblog(id:any){
    var token:any = localStorage.getItem('token')
    return this.http.get(`http://localhost:3000/api/delete/${id}`,{
      headers:new HttpHeaders({
        'Access-Control-Allow-Origin':'*',
        'content-type':'application/json',
        'auth':token
      })
    })
  }

  saveblog(id:any){
    var token:any = localStorage.getItem('token')
    return this.http.get(`http://localhost:3000/api/save/${id}`,{
      headers:new HttpHeaders({
        'Access-Control-Allow-Origin':'*',
        'content-type':'application/json',
        'auth':token
      })
    })
  }


  getdetails(id:any){
    var token:any = localStorage.getItem('token')
    return this.http.get(`http://localhost:3000/api/detail/${id}`,{
      headers:new HttpHeaders({
        'Access-Control-Allow-Origin':'*',
        'content-type':'application/json',
        'auth':token
      })
    })
  }
  getsaved(){
    var token:any = localStorage.getItem('token')
    return this.http.get(`http://localhost:3000/api/getsaved`,{
      headers:new HttpHeaders({
        'Access-Control-Allow-Origin':'*',
        'content-type':'application/json',
        'auth':token
      })
    })
  }

  deletesavedblog(id:any){
    var token:any = localStorage.getItem('token')
    return this.http.get(`http://localhost:3000/api/deletesaved/${id}`,{
      headers:new HttpHeaders({
        'Access-Control-Allow-Origin':'*',
        'content-type':'application/json',
        'auth':token
      })
    })
  }

  editblog(id:any,body:any){
    var token:any = localStorage.getItem('token')
    return this.http.post(`http://localhost:3000/api//edit/${id}`,body,{
      headers:new HttpHeaders({
        'Access-Control-Allow-Origin':'*',
        'content-type':'application/json',
        'auth':token
      })
    })
  }
}
