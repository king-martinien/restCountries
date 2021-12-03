import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  switchTheme(event: Event): void {
    let element = <HTMLButtonElement>event.currentTarget;

    if (element.classList.contains('light')) {
      let allLightElements = document.querySelectorAll('.light');
      allLightElements.forEach((element) => {
        element.classList.remove('light');
        element.classList.add('dark');
      });
    } else {
      let allDarkElements = document.querySelectorAll('.dark');
      allDarkElements.forEach((element) => {
        element.classList.remove('dark');
        element.classList.add('light');
      });
    }
  }
}
