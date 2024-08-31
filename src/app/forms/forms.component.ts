import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.scss'
})
export class FormsComponent {

  @Input() logInForm!: FormGroup;
  @Input() personType!: string;
  @Input() individualType!: string |null ;
  @Input() isSubmitted!: boolean;

  constructor(private fb: FormBuilder) { }

  setPersonType(type: string) {
    this.personType = type;
    if (type === 'legal') {
      this.individualType = null; 
    } else if (type === 'individual') {
      this.individualType = 'iranian'; 
    }
  }

  setIndividualType(type: string) {
    this.individualType = type;
  }

  onSubmit() {
    this.isSubmitted = true;
    if (this.logInForm.valid) {
      console.log('this is send');
    } else {
      console.log('it invalid');
      this.logInForm.markAllAsTouched();
    }
  }
}
