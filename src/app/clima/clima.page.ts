import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InterfazClima } from '../services/interfaz-clima';

@Component({
  selector: 'app-clima',
  templateUrl: './clima.page.html',
  styleUrls: ['./clima.page.scss'],
})
export class ClimaPage implements OnInit {
  API_KEY= '469987063c14287d9e978a608a18465c';
  API_URL= 'https://api.openweathermap.org/data/2.5/';
  ciudad = "";
  tempMax: number=0;
  tempMin: number=0;
  humedad: number=0;
  viento: number=0;
  clima: string = "";
  descripcion: string = "";

  constructor(public  httpClient : HttpClient) {
    this.loadData()
  }

  getClima(ciudad: string): Observable<InterfazClima> {
    const endpoint = `${this.API_URL}/weather?q=${ciudad}&lang=es&units=metric&appid=${this.API_KEY}`;
    console.log("aaaaaaaa" + this.httpClient.get<InterfazClima>(endpoint));
    return this.httpClient.get<InterfazClima>(endpoint);
  }
  
  buscar(){
      this.getClima(this.ciudad);
      this.obtenerClima(this.ciudad);
  }

  loadData(){
    this.httpClient.get(`${this.API_URL}/weather?q=${"Santiago"}&lang=es&units=metric&appid=${this.API_KEY}`).subscribe( results => {
      console.log(results);
    })
    this.getClima("Santiago");
    this.obtenerClima("Santiago");
  }

  obtenerClima(ciudad: string): void {
    this.getClima(ciudad).subscribe((data: InterfazClima) => {
      this.tempMax = data.main.temp_max;
      this.tempMin = data.main.temp_min;
      this.humedad = data.main.humidity;
      this.clima = data.weather[0].main;
      this.descripcion= data.weather[0].description;
      this.viento = data.wind.speed;
    });
  }

  ngOnInit() {
  }
}
