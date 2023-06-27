import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AnimalI, UserI } from "../model/animal.model";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  db_url: string= "http://localhost:3000";
  public animalData: AnimalI = {
    id: NaN,
    name: '',
    species: '',
    continent: '',
    image: '',
    size: '',
    food:[],  
    habitat: []
  }

  constructor(private http:HttpClient) {}

  register(user:UserI){
    return this.http.post(`${this.db_url}/register`, user)
  }
  login(user:UserI){
    return this.http.post(`${this.db_url}/login`, user)
  }

  logOut(){
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

  getToken(){
    return localStorage.getItem('token');
  }

  getLista(){
    return this.http.get(`${this.db_url}/animals`)
  }
  getAnimal(id:number){
    return this.http.get(`${this.db_url}/animals/${id}`)
  }

  deleteAnimal(id:number){
    return this.http.delete(`${this.db_url}/animals/${id}`)
  }

  postAnimal(animal: AnimalI){
    return this.http.post(`${this.db_url}/animals`, animal)
  }

  editAnimal(animal: AnimalI){
    this.animalData=animal;
  }

  putAnimal(animalId:any,editedAnimal: AnimalI){
    return this.http.put(`${this.db_url}/animals/${animalId}`, editedAnimal)
  }
}