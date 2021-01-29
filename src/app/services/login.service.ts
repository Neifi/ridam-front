import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url = "http:localhost:8080/login"
  private loged = false;
  constructor(public http: HttpClient,private router:Router) {

  }

  //TODO usr pass login
  public authenticate() {
    this.loged = true;
    this.router.navigate(["home"],{});
  }

  public isLoged():boolean{
    return this.loged;
  }

  public logout(){
    //TODO logout stuff
  }
}
