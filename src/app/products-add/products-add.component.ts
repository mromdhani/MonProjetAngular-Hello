import { Component, OnInit } from '@angular/core';
import { IProduit } from '../domain/iproduit';
import { ProduitsService } from '../services/produits.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-add',
  templateUrl: './products-add.component.html',
  styleUrls: ['./products-add.component.css']
})
export class ProductsAddComponent implements OnInit {

  produit: IProduit =
                {code: '', titre: '', prixUnitaire: 0};   // For the purposes of Data Binding ...

  constructor(private _service: ProduitsService, private _router: Router) { }

  ngOnInit() {
  }

  addProduit() {
    console.log('>>>>>> Dans Add produit');
    this._service.addProduit(this.produit).subscribe(
        resp => {
                  console.log (' >>>> Produit ajouté avec succès');
                  this._router.navigate(['/list']);
                });

  }

}
