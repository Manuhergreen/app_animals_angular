import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  db_url: string= "http://localhost:3000/peliculas";
  public peliData ={
    title:"",
    year:"",
    thumbnail:"",
    id:""

  }


  constructor(private http:HttpClient) {}
  getLista(){
    return this.http.get(this.db_url)
  }
  getPeli(id:number){
    return this.http.get(`${this.db_url}/${id}`)
  }

  deletePeli(id:number){
    return this.http.delete(`${this.db_url}/${id}`)
  }

  postPeli(pelicula:any){
    return this.http.post(this.db_url,pelicula)
  }

  editPeli(pelicula:any){
    this.peliData=pelicula;
  }

  putPeli(peliId:any,editedPelicula:any){
    return this.http.put(`${this.db_url}/${peliId}`, editedPelicula)
  }
}