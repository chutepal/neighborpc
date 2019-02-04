import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) {}

  postLogin(data) {
    const header = new HttpHeaders({
      'Accept': 'application/json',
      'fprnt' : '5b6c58d1e4b0adb1a3c4469c'
    });

    return this.http.post(environment.api_userService + 'login', data, {
      headers: header
    });
  }

  activeStatus(): Promise<any> {
    const header = new HttpHeaders({
      'Accept' : 'application/json',
      'username' : localStorage.getItem('loginId'),
      'fprnt' : '5b6c58d1e4b0adb1a3c4469c',
      'secToken' : localStorage.getItem('authToken')
    });

    return this.http.get(environment.api_userService + 'activeStatus', {
      headers: header
    }).toPromise();
  }

  logout() {

    const loginId = localStorage.getItem('loginId');
    const header = new HttpHeaders({
      'Accept' : 'application/json',
      'userName' : localStorage.getItem('loginId'),
      'fprnt' : '5b6c58d1e4b0adb1a3c4469c',
      'secToken' : localStorage.getItem('authToken')
    });
    return this.http.get(environment.api_userService + 'logout', {headers : header, params: {loginId}});
  }

  getProductTypes() {
    const header = new HttpHeaders ({
      'Accept' : 'application/json'
    });
    return this.http.get(environment.api_ProductTypes + 'productType/list/roots/Product', {headers: header})
  }

  listByParentId(parentId) {
    const header = new HttpHeaders({
      'Accept' : 'application/json'
    });
    return this.http.get(environment.api_ProductTypes + 'productType/listByParentId/' + parentId, {headers : header})
  }

  deleteProduct(productId) {
    console.log('delete: ', productId);
    
    const header= new HttpHeaders({
      'Content-Type' : 'application/json',
      'Accept' : 'application/json',
      'userName' : localStorage.getItem('loginId'),
      'fprnt' : '5b6c58d1e4b0adb1a3c4469c',
      'secToken' : localStorage.getItem('authToken')
    });
    return this.http.post(environment.api_ProductTypes + 'productType/delete/' + productId, productId, {headers : header});
  }
}

// curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' --header 'userName: test' --header 'fprnt: 5b6c58d1e4b0adb1a3c4469c' --header 'secToken: bcce635cd6654b5fbce46c67ffa12425' 'http://dev.seeyeit.com/products-service/productType/delete/sdh'
