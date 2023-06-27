import { AnimalI } from './../../model/animal.model';
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
  animalForm!:FormGroup;

  animalData!: AnimalI

  constructor(private formBuilder: FormBuilder, private servicio: ServiceService, private router:Router ){}


  public newAnimal = this.servicio.animalData;
  public animalId = this.servicio.animalData.id;


  ngOnInit():void{
    this.animalForm = this.formBuilder.group({
      name:[this.newAnimal.name,[Validators.required]
      ],
      species:[this.newAnimal.species,[Validators.required]
      ],
      image:[this.newAnimal.image,[Validators.required]
      ],
      continent:[this.newAnimal.continent,[Validators.required]
      ],
      size:['',[]
      ],
      food:[[],[]
      ],
      habitat:[[],[]
      ]

    });

    this.animalForm.valueChanges.subscribe((changes)=>{
      this.newAnimal= changes;
    })
  }

  onSubmit(){
    if (window.confirm('¿Estás seguro de que quieres modificar este animal?')) {
      this.servicio.putAnimal(this.animalId, this.newAnimal).subscribe((data)=>{
        console.log(data);
        
     alert("Animal editado");
     this.router.navigate(["lista"]);

     })
      
    } else{
      console.log(this.newAnimal)


      this.servicio.postAnimal(this.newAnimal).subscribe();
      alert ("Animal creado")
      this.router.navigate(["lista"])
      this.animalForm.reset()

    }


    
    this.animalForm.reset()

  }

}
