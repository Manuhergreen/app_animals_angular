import { Component } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent {
  animalsList: any[]=[];
  filteredList: any[]=[];
  constructor(private servicio:ServiceService){}
  filtrar(filtro:any){
    const filtroMinusculas = filtro.toLowerCase()
    this.filteredList = this.animalsList.filter((animal)=>animal.name.toLowerCase().includes(filtroMinusculas))
  }

  ngOnInit(): void {
    this.servicio.getLista().subscribe((data:any)=>{
      this.animalsList= [...data];
      this.filteredList=[...data]
      
    })
  }

}