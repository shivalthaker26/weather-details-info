import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import {Weather} from './weather';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements  OnInit {

  inputStringForm: FormGroup;
  inputValue = '';
  updatedValue:any = '';
  title = 'zipcode';

  constructor(private formBuilder: FormBuilder) {
  }
  ngOnInit() {
    this.inputStringForm = this.formBuilder.group( {
      'zipcode' : ['', Validators.compose([Validators.required])]
    });
  }


  // method to call reverseStringPipe service and pass values to get desired string.
  save(): void {

    if (this.inputStringForm.valid) {

      // injection of ReverseStringPipe
      }
    }
}
