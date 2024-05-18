import { I18n } from 'i18n';

export class LocaleService {
  private i18nProvider;
  constructor(opts: {i18nProvider: I18n}){this.i18nProvider = opts.i18nProvider;}

  // get current locale
  getCurrentLocale(){return this.i18nProvider.getLocales();}
  // get locales
  getLocales(){return this.i18nProvider.getLocales();}
  // set locale
  setLocale(locale: string){
    // termenate if the local is exist
    if(this.i18nProvider.getLocales().indexOf(locale) !== -1) return;
    // set the locale if it's not exist
    this.i18nProvider.setLocale(locale);
  }
  // translate
  translateString(string: string, args?: string){return this.i18nProvider.__(string, args!);}
  // translate prular
  translatePrular(phrase: string, count: number){return this.i18nProvider.__n(phrase, count);}
}