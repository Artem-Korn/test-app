import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PasswordInputComponent } from './components/password-input/password-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TestFormComponent } from './components/test-form/test-form.component';

@NgModule({
  declarations: [
    AppComponent,
    PasswordInputComponent,
    TestFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
