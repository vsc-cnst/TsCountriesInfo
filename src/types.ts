/**
 * Represents the native names of a country.
 */
export type NativeNames = {
  /** The common name of the country in its native language. */
  common?: string;
  /** The official name of the country in its native language. */
  official?: string;
};

/**
 * Represents translations of a country's name in various languages.
 * The key is the language code (e.g., "deu" for German, "fra" for French).
 */
export type Translations = {
  [cca3: string]: string | undefined; // Language code as key and translated name as value
};

/**
 * Represents the languages spoken in a country.
 * The key is the language code (e.g., "eng" for English, "spa" for Spanish).
 */
export type Languages = {
  [cca3: string]: string | undefined;
};

/**
 * Represents detailed information about a country.
 */
export type Country = {
  /**
   * The name details of the country.
   */
  name: {
    /** The commonly used name of the country. */
    common: string;
    /** The official name of the country. */
    official: string;
    /** The native names of the country. */
    native: NativeNames;
  };
  /** The top-level domains associated with the country (e.g., ".us", ".uk"). */
  tld: string[];
  /** The 2-letter ISO 3166-1 alpha-2 country code. */
  cca2: string;
  /** The 3-digit numeric ISO 3166-1 numeric country code. */
  ccn3: string;
  /** The 3-letter ISO 3166-1 alpha-3 country code. */
  cca3: string;
  /** The list of currencies used in the country (e.g., "USD", "EUR"). */
  currency: string[];
  /** The list of international calling codes for the country (e.g., "1" for the US). */
  callingCode: string[];
  /** The capital city of the country. */
  capital: string;
  /** Alternative spellings or names for the country. */
  altSpellings: string[];
  /** A relevance score indicating the importance or popularity of the country. */
  relevance: string;
  /** The region where the country is located (e.g., "Americas", "Europe"). */
  region: string;
  /** The subregion where the country is located (e.g., "Northern America"). */
  subregion: string;
  /** The primary native language code of the country. */
  nativeLanguage: string;
  /** The languages spoken in the country. */
  languages: Languages;
  /** Translations of the country's name in various languages. */
  translations: Translations;
  /** The latitude and longitude coordinates of the country. */
  latlng: number[];
  /** The demonym used to describe the people of the country (e.g., "American"). */
  demonym: string;
  /** The list of countries that share a border with this country. */
  borders: string[];
  /** The total area of the country in square kilometers. */
  area: number;
};