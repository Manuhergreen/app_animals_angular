import { Component } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  constructor(public authApi:ServiceService, private router: Router){}

  logout(){
    this.authApi.logOut();
    this.router.navigate(['/login']);
  }

}
