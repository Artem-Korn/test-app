import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms'

@Component({
  selector: 'app-test-form',
  templateUrl: './test-form.component.html'
})
export class TestFormComponent {
  form = new FormGroup({});
}
