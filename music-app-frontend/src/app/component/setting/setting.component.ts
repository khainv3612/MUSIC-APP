import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {
  isDarkMode = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  changDarkMode(): void {
    const theme = document.getElementById('body-home');
    this.isDarkMode = !this.isDarkMode;
    theme.className = (this.isDarkMode ? 'theme-dark' : 'theme-light');
  }

}
