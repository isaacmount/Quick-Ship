import { Component, OnInit } from '@angular/core';
import { identifierModuleUrl } from '../../../node_modules/@angular/compiler';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usrError : boolean    = false;
  passError: boolean    = false;

  constructor() { }

  ngOnInit() {

  }
  
  loginUser(usr,pass){
    this.usrError    = usr.trim().length==0?true:false;
    this.passError   = pass.trim().length==0?true:false;
    if(!this.usrError && !this.passError){
      alert('Login Successfully');
    }
  }

}
