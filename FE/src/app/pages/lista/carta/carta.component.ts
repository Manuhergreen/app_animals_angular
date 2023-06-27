import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';
import { AnimalI } from "../../../model/animal.model";

@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.scss']
})
export class CartaComponent {
  id!: number;
  animal!: AnimalI;
  constructor(private servicio:ServiceService, private activatedRoute:ActivatedRoute, private router:Router){}

  ngOnInit(): void{
    this.activatedRoute.paramMap.subscribe(params=> {
      this.id= Number(params.get("id"))
    })
    this.servicio.getAnimal(this.id).subscribe((data:any)=>{
      this.animal= data;
    });
  }

  deleteAnimal(): void {
    if (window.confirm('¿Estás seguro de que quieres eliminar este animal?')) {
      this.servicio.deleteAnimal(this.id).subscribe((data: any) => {
        alert('Animal eliminado');
        this.router.navigate(['lista']);
      });
    }
  }
  
  editItem(animal:any){
    this.servicio.editAnimal(animal);
    this.router.navigate(["gestion"])

  }

}
