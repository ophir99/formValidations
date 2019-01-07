import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { AppValidator } from "./../app.validators";
@Component({
  selector: "app-formsx",
  templateUrl: "./formsx.component.html",
  styleUrls: ["./formsx.component.css"]
})
export class FormsxComponent implements OnInit {
  customerForm;
  constructor(private fb: FormBuilder) {
    this.customerForm = this.fb.group({
      name: [],
      email: [],
      cc: ["", [Validators.required, AppValidator.creditCardValidator]]
    });
  }

  ngOnInit() {}
}
