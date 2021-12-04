import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Country } from '../interfaces/country';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {

  @Input() country: Country | null = null;
  @Input() skeleton: string = '';


  constructor() { }

  ngOnInit(): void {
  }

}
