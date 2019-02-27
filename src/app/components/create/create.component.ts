import { Component, OnInit, ViewChild, NgZone } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import {CdkTextareaAutosize} from '@angular/cdk/text-field';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  @ViewChild('autosize') autosize: CdkTextareaAutosize;

  form: FormGroup;

  startupName = new FormControl('', Validators.required);
  location = new FormControl('', Validators.required);
  startupDescription = new FormControl('', Validators.required);
  positionName = new FormControl('', Validators.required);
  positionDescription = new FormControl('', Validators.required);
  name = new FormControl('', Validators.required);
  university = new FormControl('', Validators.required);
  bio = new FormControl('', Validators.required);
  positions = this.fb.array([this.createPosition()]);

  constructor(
    private fb: FormBuilder,
    private ngZone: NgZone
  ) {
    this.form = fb.group({
      startupName: this.startupName,
      location: this.location,
      startupDescription: this.startupDescription,
      name: this.name,
      university: this.university,
      bio: this.bio,
      positions: this.positions
    });
  }

  ngOnInit() {
  }

  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this.ngZone.onStable.pipe(take(1))
        .subscribe(() => this.autosize.resizeToFitContent(true));
  }

  createPosition() {
    return this.fb.group({
      positionTitle: new FormControl('', Validators.required),
      positionDescription: new FormControl('', Validators.required)
    });
  }

  addPosition() {
    this.positions.push(this.createPosition());
  }

  removePosition(index: number) {
    this.positions.removeAt(index);
  }

  onSubmit() {
    console.log('model-based form submitted');
    console.log(this.form);
  }

}
