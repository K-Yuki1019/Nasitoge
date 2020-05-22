import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Observable, from } from 'rxjs';
import { User } from '../interfaces/user';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user$: Observable<User> = this.authService.user$;

  constructor(private authService: AuthService) {}

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }

  ngOnInit(): void {
  }

}
