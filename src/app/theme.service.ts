import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  theme: string = "dark-theme";
  themeChange: Subject<string> = new Subject<string>();

  constructor() {
    this.themeChange.subscribe((value) => {this.theme = value});
   }

  changeTheme(theme: string): void {
    this.themeChange.next(theme);
  }
}
