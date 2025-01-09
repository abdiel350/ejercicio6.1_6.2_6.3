import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//import { PeliculasService, Pelicula } from '../servicios/peliculas.service';
import { PeliculasAPIService } from '../servicios/peliculas-api.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {

  id: number = 0;
  //movie: Pelicula | undefined;
  movie: any;

  //constructor(private activatedRoute: ActivatedRoute, private peliculasService: PeliculasService) {}
  constructor(private activatedRoute: ActivatedRoute, private peliculasAPIService: PeliculasAPIService) {}
  ngOnInit() {
    const idParam = this.activatedRoute.snapshot.paramMap.get('id');
    if (idParam !== null) {
      this.id = +idParam;
      console.log('ID de la película:', this.id);
     /* this.movie = this.peliculasService.getPelicula(this.id);
      
      if (!this.movie) {
        console.error('No se encontró ninguna película con el ID proporcionado.');
      }

    } else {
      console.error('ID de película no proporcionado en la ruta.');
    }*/

    this.peliculasAPIService.getPelicula(this.id).subscribe(
      result => {
        this.movie = result;
      },
      err => {
        console.error('Error al obtener la película:', err);
      }
    );
  } else {
    console.error('ID de película no proporcionado en la ruta.');
  }
}
  }

