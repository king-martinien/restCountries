import { Component, OnInit } from '@angular/core';
import { Country } from '../interfaces/country';
import { CountriesService } from '../services/countries.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  regionFilter: String[] = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];
  countries: Country[] = [];
  countriesSkeleton: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor(private _countriesServices: CountriesService) {}

  ngOnInit(): void {
    this.onGetAllCountries();

    document.addEventListener('scroll', (event: Event) => {
      if (
        document.body.scrollTop > 2000 ||
        document.documentElement.scrollTop > 2000
      ) {
        document.querySelector('.back-top')?.classList.add('active');
      } else {
        document.querySelector('.back-top')?.classList.remove('active');
      }
    });
  }

  onGetAllCountries(): void {
    this._countriesServices.getAllCountries().subscribe((countriesResult) => {
      console.log(countriesResult);
      countriesResult.forEach((country) => {
        country.population = new Intl.NumberFormat().format(
          Number(country.population)
        );
      });

      this.countries = countriesResult;
    });
  }

  activeFilterMenu(event: Event) {
    let btn = <HTMLButtonElement>event.currentTarget;
    let menu = btn.parentElement?.querySelector('.filter-menu');
    menu?.classList.toggle('menu-active');
  }
}
