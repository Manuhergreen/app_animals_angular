import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.scss']
})
export class CartaComponent {
  id!:number;
  peli!:any;
  constructor(private servicio:ServiceService, private activatedRoute:ActivatedRoute, private router:Router){}

  ngOnInit(): void{
    this.activatedRoute.paramMap.subscribe(params=> {
      this.id= Number(params.get("id"))
    })
    this.servicio.getPeli(this.id).subscribe((data:any)=>{
      this.peli= data;
    });
  }

  deletePeli(): void{
    this.servicio.deletePeli(this.id).subscribe((data:any)=>{
      alert("Pelicula eliminada")
      this.router.navigate(["lista"])
    })
  }
  editItem(pelicula:any){
    this.servicio.editPeli(pelicula);
    this.router.navigate(["gestion"])

  }

}
