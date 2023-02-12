import { Component, OnInit} from '@angular/core';

import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-personnage',
  templateUrl: './personnage.component.html',
  styleUrls: ['./personnage.component.scss']


})
export class PersonnageComponent implements OnInit{


// constructor(){}
// //  url:  https://thesimpsonsquoteapi.glitch.me/quotes?count=


// personnage : string = '';
// quotes : string = '';
// character : string = '';

// async recup(){
//   let reponse = await fetch('https://thesimpsonsquoteapi.glitch.me/quotes?count=6');
//   let data = await reponse.json()
//   let quotes = data.quotes[0].character;
//   console.log(data);
 
// }


URL = 'https://thesimpsonsquoteapi.glitch.me/quotes?count=6';

public personnage : any = {
  character : '',
  quote : '',
 
 }
 
   constructor(public http: HttpClient){
 
   this.readAPI('https://thesimpsonsquoteapi.glitch.me/quotes?count=6')
   .subscribe((data) => {
     this.personnage = data;
     console.log(this.personnage.quote);
 
   });
 
   }
 
   readAPI(URL: string){
    
     return this.http.get(URL);
   }

 
 ngOnInit(): void {
 
  this.http.get<any>(this.URL).subscribe((personnage) => {
  // console.log(responseObj.personnage, 'response');
  this.personnage = personnage;
  
})}


// var arr = [ 1, 3, 5, 1, 2, 3, 7, 4, 5];
// var unique = arr.filter((x, i) => arr.indexOf(x) === i);
// console.log(unique);
 
 } 


// 1. Faire 6 appel Api
// 2. Afficher Les perso qu'une seul fois 
// 3. Afficher une photo et un bouton contenant le nom du perso 
// 4.Quand j'appuie sur le boutton ça va me chercher une citation 
// du perso en question

// character renvoi le personnage