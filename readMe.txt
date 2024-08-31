npm install ng2-datepicker
npm install @angular/material @angular/cdk
npm install moment
---------------------------------------------------------------------------------------
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { Ng2DatepickerModule } from 'ng2-datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    Ng2DatepickerModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
--------------------------------------------------------------------------------------------------
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  logInForm: FormGroup;
  date: any;

  constructor(private fb: FormBuilder) {
    this.logInForm = this.fb.group({
      date: ['']
    });
  }

  openCalendar(): void {
    // Logic to open the calendar
  }
}
------------------------------------------------------------------------------------------------------------
.relative {
  position: relative;
}

mat-form-field {
  width: 100%;
}

mat-icon-button {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}
---------------------------------------------------------------------------------------------------------------
<div class="relative">
  <mat-form-field appearance="fill" class="w-full p-0">
    <mat-label class="text-sm"> «—ÌŒ  Ê·œ</mat-label>
    <input
      matInput
      [(ngModel)]="date"
      [ng2Datepicker]="{ format: 'jalali' }"
      (ngModelChange)="date = $event"
      placeholder=" «—ÌŒ  Ê·œ"
      formControlName="date"
      required
    />
    <button
      mat-icon-button
      class="absolute right-0 top-1/2 transform -translate-y-1/2"
      (click)="openCalendar()"
    >
      <mat-icon>calendar_today</mat-icon>
    </button>
  </mat-form-field>
</div>


