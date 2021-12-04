import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  regionFilter: String[] = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];

  constructor() {}

  ngOnInit(): void {}

  activeFilterMenu(event: Event) {
    let btn = <HTMLButtonElement>event.currentTarget;
    let menu = btn.parentElement?.querySelector('.filter-menu');
    menu?.classList.toggle('menu-active');
  }
}
