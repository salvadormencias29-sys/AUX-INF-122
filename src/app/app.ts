import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'mi coleccion de figuritas';
  figuritas = [
    {nombre: 'Neymar', favorito:true},
    {nombre: 'Messi', favorito:false},
    {nombre: 'Pedri', favorito:false},
    {nombre: 'Lamine', favorito:true}
  ];

  nuevaFigurita = '';

  agregar(){
    if (this.nuevaFigurita.trim()){
      //trim devuelve el elemento sin espacios y vacios
      //entonces si es verdad que hay algo aparte de espacion
      this.figuritas.push(
        {
          nombre: this.nuevaFigurita,
          favorito: false
        }
      );
      //push añade una 'figurita al vector'

      this.nuevaFigurita = '';//vacia la variable nuevaFigurita
    }
  }
  eliminar(indice:number){
    this.figuritas.splice(indice,1);//splice: elimina los elementos del vector
  }
  favorito(jugador: any) {
  // Invierte el valor actual (si es true pasa a false, si es false pasa a true)
  jugador.favorito = !jugador.favorito;
}
}
