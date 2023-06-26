import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { ServiceService } from 'src/app/services/service.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  constructor(private authApi: ServiceService, private router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
    // if(!this.authApi.getToken() || this.authApi.getRole() !== 'admin')
    console.log('token_guard',this.authApi.getToken());
    
    if(!this.authApi.getToken())
    {
      this.router.navigate(['/login']);
    }
    return true;
  }
  
}