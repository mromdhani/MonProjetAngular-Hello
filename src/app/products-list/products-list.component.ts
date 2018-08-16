import { Component, OnInit } from '@angular/core';
import { IProduit } from '../domain/iproduit';
import { ProduitsService } from '../services/produits.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

   data: IProduit[];

   constructor( private _service: ProduitsService) { }  // Constructor injection

  ngOnInit() {

    this._service.getProduits().subscribe(
      resp => this.data = resp,
      erreur => console.log('ATTENTION Il y a l\'erreur : ' + erreur));
   // this.data = this._service.getProduits();
  }

}
