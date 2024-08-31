import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

export const JALALI_DATE_FORMATS = {
  parse: {
    dateInput: 'jYYYY/jMM/jDD',
  },
  display: {
    dateInput: 'jYYYY/jMM/jDD',
    monthYearLabel: 'jYYYY jMMMM',
    dateA11yLabel: 'jYYYY/jMM/jDD',
    monthYearA11yLabel: 'jYYYY jMMMM',
  },
};


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  logInForm: FormGroup;
  isFormFilled: boolean = false;
  validateOnSubmit: boolean = false;
  isSubmitted = false;
  public personType: string = 'individual';
  public individualType: string = 'iranian';

  selectedListItem: string = 'اطلاعات اولیه مودی';

  constructor(private fb: FormBuilder) {
    this.logInForm = this.fb.group({
      name: ['', [Validators.minLength(3),Validators.required]],
      lastName: ['',[ Validators.minLength(3), Validators.required]],
      nationalCode: ['',Validators.required],
      phone: ['', [Validators.pattern(/^\d{11}$/), Validators.required]],
      date1: ['',Validators.required],
      date2: ['',Validators.required],
      date3: ['',Validators.required],
      date4: ['',Validators.required],
      identifier: ['',Validators.required],
    });
  }

  
  get isIndividual() {
    return this.personType === 'individual';
  }

  get isLegal() {
    return this.personType === 'legal';
  }

  get isIranian() {
    return this.individualType === 'iranian';
  }

  get isNonIranian() {
    return this.individualType === 'nonIranian';
  }

  get isCivilPartnership() {
    return this.individualType === 'civilPartnership';
  }


  setPersonType(type: string) {
    this.personType = type;
  }

  setIndividualType(type: string) {
    this.individualType = type;
  }

}