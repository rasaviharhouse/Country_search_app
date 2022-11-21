import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Country} from 'src/app/models/country/country.model';
import {CountryService} from 'src/app/service/country/country.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  country: string;
  countries: Country[] = [];

  constructor(private countryService: CountryService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.fetchCountryData();
  }

  fetchCountryData = () => {
    const x = this.route.snapshot.paramMap.get('name');
    this.country = x !== null ? x : '';
    this.countryService.fetchCountryData(this.country).subscribe(downloadData => {
      this.countries = downloadData;
    });
  }

}
