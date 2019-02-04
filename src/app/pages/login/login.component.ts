import { environment } from './../../../environments/environment';
import { DataService } from './../../data.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  isAdmin: Boolean = false;
  appType: String = 'CUSTOMER';
  constructor(
    private dataService: DataService,
    private router: Router
  ) { }

  ngOnInit() {}

  toggleIsAdmin() {
    this.isAdmin = !this.isAdmin;
    this.isAdmin ? this.appType = 'ADMIN' : this.appType = 'CUSTOMER';
  }
  postLogin() {
    const data = {
      loginId : this.username,
      password : this.password,
      keepAlive : true,
      appType : this.appType
    };
    this.dataService.postLogin(data).subscribe((res: any) => {
      console.log(res);
      localStorage.setItem('authToken', res.message);
      localStorage.setItem('loginId', res.data.loginId);
      this.router.navigate(['/dashboard']);
    }, err => {
      console.log(err);
    });

    environment.isLogin=true;
  }

}
