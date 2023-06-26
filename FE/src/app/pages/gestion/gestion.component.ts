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

  public newAnimal = this.servicio.animalData;
  public animalId = this.servicio.animalData.id;

  ngOnInit():void{
    this.moviesForm = this.formBuilder.group({
      name:[this.newAnimal.name,[Validators.required]
      ],
      species:[this.newAnimal.species,[Validators.required]
      ],
      image:[this.newAnimal.image,[Validators.required]
      ]

    });

    this.moviesForm.valueChanges.subscribe((changes)=>{
      this.newAnimal= changes;
    })
  }

  onSubmit(){
    if (this.animalId!) {
      this.servicio.putAnimal(this.animalId, this.newAnimal).subscribe((data)=>{
        console.log(data);
        
      alert("Pelicula editada");
      this.router.navigate(["lista"]);

      })
      
    } else{
      this.servicio.postAnimal(this.newAnimal).subscribe();
      alert ("Pelicula creada")
      this.router.navigate(["lista"])

    }


    
    this.moviesForm.reset()

  }

}
