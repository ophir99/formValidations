import { Component } from "@angular/core";
import {
  FormArray,
  FormGroup,
  FormControl,
  FormBuilder,
  Validators
} from "@angular/forms";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "forms-pro";

  studentForm;

  constructor(private fBuilder: FormBuilder) {
    this.createStudentForm();
    this.createSkillsFG(10);
    this.studentForm.get("name").valueChanges.subscribe(
      val => {
        const pattern = /^[A-Za-z]+$/;
        if (pattern.test(val)) {
          return;
        } else {
          console.error("Wrong Val");
          this.studentForm
            .get("name")
            .setValue(val.substring(0, val.length - 1));
        }
      },
      () => {},
      () => {}
    );
  }

  createStudentForm() {
    // this.studentForm = new FormGroup({
    //   name: new FormControl("Angular", []),
    //   email: new FormControl(),
    //   educationDetails: new FormArray([]),
    //   skills: new FormArray([])
    // });

    this.studentForm = this.fBuilder.group({
      name: [
        "",
        [Validators.required, Validators.maxLength(10), this.alphabetsonly]
      ],
      email: [],
      educationDetails: this.fBuilder.array([]),
      skills: this.fBuilder.array([])
    });
  }

  addEducationDetails() {
    // const eduFG = new FormGroup({
    //   iName: new FormControl(),
    //   cName: new FormControl()
    // });

    const eduFG = this.fBuilder.group({
      iName: [],
      cName: []
    });
    this.studentForm.get("educationDetails").push(eduFG);
  }
  addSkillsDetails() {
    const skillFG = new FormGroup({
      sName: new FormControl(),
      sExp: new FormControl()
    });
    this.studentForm.get("skills").push(skillFG);
  }

  removeSkills(index) {
    this.studentForm.get("skills").removeAt(index);
  }

  createSkillsFG(length: number) {
    const skillFG = new FormGroup({
      sName: new FormControl(),
      sExp: new FormControl()
    });
    for (let i = 0; i < length; i++) {
      this.studentForm.get("skills").push(skillFG);
    }
  }

  alphabetsonly(myFC) {
    const pattern = /^[A-Za-z]+$/;

    if (pattern.test(myFC.value)) {
      return null;
    } else {
      return {
        alphabetError: true
      };
    }
  }
}
