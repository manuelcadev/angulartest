import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserEmailInfoInputValueDTO } from 'src/app/models/dealerServiceInfoModel';


@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  form: FormGroup;

  @Input()
  errors: string[] = [];
  
  @Input()
  model: UserEmailInfoInputValueDTO;

  @Output()
  onSubmit: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', {
        validators: [Validators.required]
      }]
    });

    if (this.model !== undefined) {
      this.form.patchValue(this.model);
    }
  }

  searchDealerInfoData() {
    this.errors = [];
    this.onSubmit.emit(this.form.value);
  }

  getEmailFieldErrors(){
    var field = this.form.get('email');
    if(field?.hasError('required')){
      return 'The field Email is required'
    }

    return '';
  }

}
