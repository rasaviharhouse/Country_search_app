import {Component, OnInit} from '@angular/core';
import {Country} from 'src/app/models/country/country.model';
import {CountryService} from 'src/app/service/country/country.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  countries: Country[] = [];
  searchText: string;

  filteredProducts: Country[] = [];

  ListFilter = '';

  get listFilter(): string {
    return this.ListFilter;
  }

  set listFilter(value: string) {
    this.ListFilter = value;
    this.filteredProducts = this.ListFilter ? this.performFilter(this.ListFilter) : this.countries;
  }

  constructor(private countryService: CountryService) {
  }

  ngOnInit(): void {
    this.fetchData();
  }

  performFilter(filterBy: string): Country[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.countries.filter((country: Country) =>
      country.name.common.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  fetchData(): void {
    this.countryService.fetchData().subscribe(downloadData => {
      this.countries = downloadData;
      this.filteredProducts = downloadData;
    });
  }

  fetchCountryData(): void {
    this.countryService.fetchCountryData(this.searchText).subscribe(downloadData => {
      this.countries = downloadData;
    });
  }

}
