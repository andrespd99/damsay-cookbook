import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  data: {
    restaurant_info:{
      name: 'Chef Masters',
      owner: 'Bordon Damsay',
      profile_pic: 'https://tinyurl.com/y5aljvpz',
      description: 'Es un chef, due�o de restaurantes y presentador de televisi�n brit�nico. En toda su carrera gastron�mica ha sido condecorado con 17 estrellas Michelin, de las que hoy mantiene. Adem�s de sus facetas culinarias, Ramsay es conocido por presentar programas de televisi�n y espacios de telerrealidad sobre cocina, tanto en Reino Unido como en Estados Unidos.'
    }
  }

  constructor() { }

}
