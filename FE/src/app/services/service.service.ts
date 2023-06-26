import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AnimalI } from "../model/animal.model";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  db_url: string= "http://localhost:3000/animals";
  animalData!: AnimalI;

  constructor(private http:HttpClient) {}
  getLista(){
    return this.http.get(this.db_url)
  }
  getAnimal(id:number){
    return this.http.get(`${this.db_url}/${id}`)
  }

  deleteAnimal(id:number){
    return this.http.delete(`${this.db_url}/${id}`)
  }

  postAnimal(animal: AnimalI){
    return this.http.post(this.db_url,animal)
  }

  editAnimal(animal: AnimalI){
    this.animalData=animal;
  }

  putAnimal(animalId:any,editedAnimal: AnimalI){
    return this.http.put(`${this.db_url}/${animalId}`, editedAnimal)
  }
}