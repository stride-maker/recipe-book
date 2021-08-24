import { Component, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  collapsed: boolean = true;
  isAuthenticated = false;
  private userSub: Subscription;

  constructor(
    private dataStorageServive: DataStorageService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe((user) => {
      this.isAuthenticated = !user ? false : true;
    });
  }

  onLogout() {
    this.authService.logout();
  }

  onSaveData() {
    this.dataStorageServive.storeRecipes();
  }

  onFetchData() {
    this.dataStorageServive.loadRecipes().subscribe();
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }
}
