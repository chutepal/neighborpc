import { environment } from './../../environments/environment';
import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private dataService: DataService,
    private router: Router
  ) { }

  login: boolean = environment.isLogin;
  
  ngOnInit() {
  }
  logout() {
    this.dataService.logout()
      .subscribe(res => {
        console.log('logged out');
        localStorage.clear();
        this.router.navigate(['login']);
      });
  }

}
