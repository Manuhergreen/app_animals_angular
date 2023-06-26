import { Component } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  movieList: any[]=[];
  dramaList: any[]=[];
 

  constructor(private servicio: ServiceService){}
  ngOnInit():void{
    this.servicio.getLista().subscribe((data:any)=>{
      console.log(data[0].genres);
      
      this.movieList=[...data]
      // this.dramaList=data.filter((movie: any)=> movie?.genres?.includes('Drama'))
      // console.log(this.dramaList);
      
      // for (const movie of data) {
      //   console.log(movie.genres)
      // }
    })
    //codigo nuevo

  }

  
}
