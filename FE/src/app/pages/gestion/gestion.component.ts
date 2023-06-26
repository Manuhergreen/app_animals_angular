import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';
@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.scss']
})
export class GestionComponent {
  moviesForm!:FormGroup;

  constructor(private formBuilder: FormBuilder, private servicio: ServiceService, private router:Router ){}

  public newpeli = this.servicio.peliData;
  public peliId = this.servicio.peliData.id;

  ngOnInit():void{
    this.moviesForm = this.formBuilder.group({
      title:[this.newpeli.title,[Validators.required]
      ],
      thumbnail:[this.newpeli.thumbnail,[Validators.required]
      ],
      year:[this.newpeli.year,[Validators.required]
      ]



    });

    this.moviesForm.valueChanges.subscribe((changes)=>{
      this.newpeli= changes;
    })
  }

  onSubmit(){
    if (this.peliId !== "") {
      this.servicio.putPeli(this.peliId, this.newpeli).subscribe((data)=>{
        console.log(data);
        
      alert("Pelicula editada");
      this.router.navigate(["lista"]);

      })
      
    } else{
      this.servicio.postPeli(this.newpeli).subscribe();
      alert ("Pelicula creada")
      this.router.navigate(["lista"])

    }


    
    this.moviesForm.reset()

  }

}
