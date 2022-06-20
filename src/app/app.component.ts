import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Role } from './model/role.enum';
import { User } from './model/user.model';
import { AuthService } from './service/auth.service';
import {faShoppingCart, faSignIn, faUserPlus, 
        faHome, faLock, faUser, faSignOut} from "@fortawesome/free-solid-svg-icons";
import {PurchaseItem} from "./model/purchase-item.model";
import {PurchaseService} from "./service/purchase.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  faSignout = faSignOut;
  faUser = faUser;
  faShop = faShoppingCart;
  faRegister =faUserPlus;
  faLogin = faSignIn;
  faHome = faHome;
  faAdmin = faLock;
  title = 'musicStoreAppFrontend';
  purchaseItemList: Array<PurchaseItem> = [];
  currentUser: User = new User;
  currentCount : number = 0;

  constructor(private authenticationService: AuthService, 
    private router: Router,private purchaseService: PurchaseService) 
  {
    this.purchaseService.getAllPurchaseItems().subscribe(data => {
      this.purchaseItemList = data;
      this.currentCount = data.length;
    });
    this.authenticationService.currentUser.subscribe(data => {
      this.currentUser = data;
    });
  }

  isAdmin() 
  {
    return this.currentUser?.role === Role.ADMIN;
  }

  logOut() 
  {
    this.currentCount = 0;
    this.authenticationService.logOut();
    this.router.navigate(['/login']);
  }
}

