import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-back-to-top',
  templateUrl: './back-to-top.component.html',
  styleUrls: ['./back-to-top.component.scss'],
})
export class BackToTopComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  backToTop(event: Event) {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}
