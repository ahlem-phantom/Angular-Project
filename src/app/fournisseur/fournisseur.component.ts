import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fournisseur',
  templateUrl: './fournisseur.component.html',
  styleUrls: ['./fournisseur.component.css']
})
export class FournisseurComponent implements OnInit {
  idFournisseur :number = 105;
  code :string = 'A104B89';
  libelle :string= 'MyTeck';
  hide :boolean = false;
  constructor() { }

  ngOnInit(): void {

  }


}
