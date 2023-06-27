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
  isSorted: boolean = false;

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

  onClickSort() {
    if (!this.isSorted) {      
      this.filteredList = this.animalsList.sort(
        (p1, p2) => (p1.name < p2.name) ? -1 : (p1.name > p2.name) ? 1 : 0);
      console.log("sorted -----", this.animalsList);
      } else {
        this.filteredList = this.animalsList.sort(
          (p1, p2) => (p1.id < p2.id) ? -1 : (p1.id > p2.id) ? 1 : 0);
        console.log("not sorted -----", this.animalsList);
      }
    console.log(this.isSorted);
    
    this.isSorted = !this.isSorted;
  }

  onClickList() {
    this.isList = !this.isList;
    console.log(this.isList);
  }

}