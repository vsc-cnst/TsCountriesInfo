
# Country Information Library

A TypeScript library that provides detailed information about countries, including their names, languages, translations, and other metadata.


## Installation

To install this library, run the following:

```bash
npm install your-repository-name
```

## Usage

You can use the `Country` type to define a country object with the structure outlined above. Here's an example:

```typescript
import { Country } from 'your-repository-name';

const country: Country = {
  name: {
    common: 'Canada',
    official: 'Canada',
    native: { common: 'Canada', official: 'Canada' },
  },
  tld: ['.ca'],
  cca2: 'CA',
  ccn3: '124',
  cca3: 'CAN',
  currency: ['CAD'],
  callingCode: ['1'],
  capital: 'Ottawa',
  altSpellings: ['CA'],
  relevance: 'high',
  region: 'Americas',
  subregion: 'Northern America',
  nativeLanguage: 'eng',
  languages: { eng: 'English', fra: 'French' },
  translations: { deu: 'Kanada', fra: 'Canada' },
  latlng: [56.1304, -106.3468],
  demonym: 'Canadian',
  borders: ['USA'],
  area: 9984670,
};
```

## Types

### `NativeNames`
Represents the native names of a country in its native language.

```typescript
type NativeNames = {
  common?: string;
  official?: string;
};
```

### `Translations`
Represents translations of a country's name in various languages.

```typescript
type Translations = {
  [cca3: string]: string | undefined; // Language code as key and translated name as value
};
```

### `Languages`
Represents the languages spoken in a country.

```typescript
type Languages = {
  [cca3: string]: string | undefined; // Language code as key and language name as value
};
```

### `Country`
Represents detailed information about a country, including its name, languages, borders, area, and more.

```typescript
type Country = {
  name: {
    common: string;
    official: string;
    native: NativeNames;
  };
  tld: string[];
  cca2: string;
  ccn3: string;
  cca3: string;
  currency: string[];
  callingCode: string[];
  capital: string;
  altSpellings: string[];
  relevance: string;
  region: string;
  subregion: string;
  nativeLanguage: string;
  languages: Languages;
  translations: Translations;
  latlng: number[];
  demonym: string;
  borders: string[];
  area: number;
};
```

## Disclaimer

This project is a work in progress and may not be fully accurate or up-to-date. Please verify the information in this library before using it for any critical application. The authors are not responsible for any inaccuracies or errors in the data provided.

This library includes data sourced from [restcountries repository](https://github.com/aredo/restcountries), which is maintained by others. While every effort is made to keep the data accurate and up-to-date, we cannot guarantee its completeness or correctness. Please verify the data independently for critical applications. The authors of this library are not responsible for any inaccuracies or errors in the external data provided.


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
