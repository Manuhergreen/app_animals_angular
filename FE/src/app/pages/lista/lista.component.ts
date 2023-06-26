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

  isList: boolean = false;
  selectedType: string = "name";
  public searchTypes: any = [
    {value: "name", viewValue: "Name"},
    {value: "continent", viewValue: "Continent"},
    {value: "size", viewValue: "Size"},
  ]

  constructor(private servicio:ServiceService){}

  ngOnInit(): void {
    this.servicio.getLista().subscribe((data:any)=>{
      this.animalsList= [...data];
      this.filteredList=[...data]
      
    })
  }

  filtrar(filtro: any) {
    console.log("this.selectedType ------", this.selectedType);
    console.log("this.animalsList ------", this.animalsList);
    console.log("filtro value ------", filtro);
    
    this.filteredList = this.animalsList.filter((animal) => {
        console.log(animal);
        return animal[this.selectedType]?.toLowerCase().includes(filtro.toLowerCase())
      })
  }

  onClickList() {
    this.isList = !this.isList;
    console.log(this.isList);
  }

}