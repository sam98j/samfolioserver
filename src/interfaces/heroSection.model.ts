export interface HeroSectionDbDoc {
  id?: string;
  greeting: {ar: string, en: string},
  titiles: [ { ar: string, en: string} ],
  overview: {en: string, ar: string};
}