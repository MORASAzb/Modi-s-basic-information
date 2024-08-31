import { Injectable } from '@angular/core';
import { DateAdapter } from '@angular/material/core';
import jalaliMoment from 'jalali-moment';

@Injectable({
  providedIn: 'root'
})
export class JalaliDateAdapter extends DateAdapter<jalaliMoment.Moment> {

  private readonly DEFAULT_LOCALE = 'fa-IR';

  constructor() {
    super();
    jalaliMoment.locale(this.DEFAULT_LOCALE);
  }

  override setLocale(locale: string): void {
    super.setLocale(locale);
    jalaliMoment.locale(locale);
  }

  override getYear(date: jalaliMoment.Moment): number {
    return this.clone(date).jYear();
  }

  override getMonth(date: jalaliMoment.Moment): number {
    return this.clone(date).jMonth();
  }

  override getDate(date: jalaliMoment.Moment): number {
    return this.clone(date).jDate();
  }

  override getDayOfWeek(date: jalaliMoment.Moment): number {
    return this.clone(date).day();
  }

  override getMonthNames(style: 'long' | 'short' | 'narrow'): string[] {
    return jalaliMoment.localeData().jMonths();
  }

  override getDateNames(): string[] {
    return Array.from({ length: 31 }, (_, i) => String(i + 1));
  }

  override getDayOfWeekNames(style: 'long' | 'short' | 'narrow'): string[] {
    return jalaliMoment.localeData().weekdays();
  }

  override getYearName(date: jalaliMoment.Moment): string {
    return String(this.getYear(date));
  }

  override getFirstDayOfWeek(): number {
    return jalaliMoment.localeData().firstDayOfWeek();
  }

  override getNumDaysInMonth(date: jalaliMoment.Moment): number {
    return this.clone(date).jDaysInMonth();
  }

  override clone(date: jalaliMoment.Moment): jalaliMoment.Moment {
    return date.clone().locale(this.DEFAULT_LOCALE);
  }

  override createDate(year: number, month: number, date: number): jalaliMoment.Moment {
    const result = jalaliMoment(`${year}/${month + 1}/${date}`, 'jYYYY/jMM/jDD').locale(this.DEFAULT_LOCALE);
    if (!result.isValid()) {
      throw Error(`Invalid date "${date}" for month with index "${month}".`);
    }

    return result;
  }

  override today(): jalaliMoment.Moment {
    return jalaliMoment().locale(this.DEFAULT_LOCALE);
  }

  override parse(value: any, parseFormat: string | string[]): jalaliMoment.Moment | null {
    if (value && typeof value === 'string') {
      return jalaliMoment(value, parseFormat, this.locale || this.DEFAULT_LOCALE).locale(this.DEFAULT_LOCALE);
    }
    return value ? jalaliMoment(value).locale(this.DEFAULT_LOCALE) : null;
  }

  override format(date: jalaliMoment.Moment, displayFormat: string): string {
    date = this.clone(date);
    return date.format(displayFormat);
  }

  override addCalendarYears(date: jalaliMoment.Moment, years: number): jalaliMoment.Moment {
    return this.clone(date).add(years, 'jYear');
  }

  override addCalendarMonths(date: jalaliMoment.Moment, months: number): jalaliMoment.Moment {
    return this.clone(date).add(months, 'jMonth');
  }

  override addCalendarDays(date: jalaliMoment.Moment, days: number): jalaliMoment.Moment {
    return this.clone(date).add(days, 'day');
  }

  override toIso8601(date: jalaliMoment.Moment): string {
    return this.clone(date).toISOString();
  }

  override isDateInstance(obj: any): boolean {
    return jalaliMoment.isMoment(obj);
  }

  override isValid(date: jalaliMoment.Moment): boolean {
    return this.clone(date).isValid();
  }

  override invalid(): jalaliMoment.Moment {
    return jalaliMoment.invalid();
  }
}
