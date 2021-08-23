import { Component, OnInit, Output } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  collapsed: boolean = true;

  constructor(private dataStorageServive: DataStorageService) {}

  ngOnInit(): void {}

  onSaveData() {
    this.dataStorageServive.storeRecipes();
  }

  onFetchData() {
    this.dataStorageServive.loadRecipes().subscribe();
  }
}
