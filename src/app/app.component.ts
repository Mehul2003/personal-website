import { Component } from '@angular/core';
import { ThemeService } from './theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'personal-website';
  theme: string = "dark-theme";

  constructor(private themeService: ThemeService) {
    this.themeService.themeChange.subscribe((value) => {this.theme = value});
  }
}
