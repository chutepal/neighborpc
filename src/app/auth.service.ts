import { DataService } from './data.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  constructor(private dataService: DataService, private router: Router) { }

 async canActivate() {
    let isLoggedIn = false;

     await this.dataService.activeStatus()
      .then(res => {
        res.status === 'Success' ? isLoggedIn = true : isLoggedIn = false;
      })
      .catch(err => {
        isLoggedIn = false;
      });
      if (!isLoggedIn) {
        this.router.navigate(['login']);
      }
      return isLoggedIn;
  }
}
