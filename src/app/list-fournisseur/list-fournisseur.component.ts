import { Component, OnInit } from '@angular/core';
import {Fournisseur} from "../models/fournisseur";

@Component({
  selector: 'app-list-fournisseur',
  templateUrl: './list-fournisseur.component.html',
  styleUrls: ['./list-fournisseur.component.css']
})
export class ListFournisseurComponent implements OnInit {
  list: Fournisseur[];
  constructor() { }

  ngOnInit(): void {

    this.list=[
      {idFournisseur:101,code:"1ABC4522",libelle:"hp"},
      {idFournisseur:200,code:"2ABC4522",libelle:"dell"},
      {idFournisseur:300,code:"3ABC4522",libelle:"lenovo"},
      {idFournisseur:400,code:"40ABC452",libelle:"asus"},
      {idFournisseur:500,code:"2A552AV2",libelle:"exemple1"}
    ]
  }

  getColor (fournisseur:Fournisseur){
    if(fournisseur.libelle=='hp')
      return "#32CD32";
    else
      return "yellow";
  }

  delete(fournisseur:Fournisseur){
    let i =this.list.indexOf(fournisseur);
    this.list.splice(i,1);
  }
}
