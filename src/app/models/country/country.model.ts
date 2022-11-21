export interface Country {
  name: Name;
  cca2: string;
  altSpellings: any[];
  region: string;
  subregion: string;
  population: number;
  capital: string;
  flags: Flags;
  latlng: any[];
  area: any[];
  timezones: any[];
  borders: string[];
  currencies: Map<string, Currency>;
  languages: any;
}

export interface Currency {
  name: string;
  symbol: string;
}

export interface Name {
  common: string;
  official: string;
}

export interface Flags {
  png: string;
  svg: string;
}
