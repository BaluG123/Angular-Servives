import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor() { }
  users(){
    return [
      {name:'balu',age:20,gender:'male'},
      {name:'nisha',age:22,gender:'female'},
      {name:'sam',age:23,gender:'female'}
    ]
  }
}
