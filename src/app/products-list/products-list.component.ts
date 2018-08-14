import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

   data: any[] ;

  constructor() { }

  ngOnInit() {

    this.data = [
      {'code': 'P1000', 'titre': 'Cafe', 'prixUnitaire': 5.5},
      {'code': 'P2000', 'titre': 'Thé', 'prixUnitaire': 4.5},
      {'code': 'P3000', 'titre': 'Jus', 'prixUnitaire': 7.5},
    ];
  }

}
