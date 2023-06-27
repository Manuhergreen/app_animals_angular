import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserI } from 'src/app/model/animal.model';
import { ServiceService } from 'src/app/services/service.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  
  registerForm!: FormGroup;
  submitted: boolean= false;
  errors: any;

  constructor(private form: FormBuilder, private authApi: ServiceService, private router: Router ){}

  ngOnInit(): void {
    this.registerForm = this.form.group({
      email: ["", [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: ["", [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}')]]
  })
  }

  onSubmit(){
    console.log(this.registerForm.value);
    this.submitted=true;

    if(this.registerForm.valid){
      let user: UserI = this.registerForm.value;
      this.authApi.register(user).subscribe(
        (data:any) => {
          console.log(data)
          this.router.navigate(['/login']);
        },
        (error) => {
          this.errors = error;

        }

      )
    }
    
  }
}
