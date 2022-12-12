import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isChecked = true;
  theme = "Dark";


  constructor(private themeService: ThemeService) { }

  ngOnInit(): void {
  }

  changeTheme() {
    this.isChecked = !this.isChecked;
    if (this.isChecked) {
      this.themeService.changeTheme("dark-theme");
      this.theme = "Dark";
    }
    else {
      this.themeService.changeTheme("light-theme");
      this.theme = "Light";
    }
  }

}
