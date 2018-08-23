import { Component, OnInit, OnDestroy } from '@angular/core';
import { IProduit } from '../domain/iproduit';
import { ActivatedRoute, Router } from '../../../node_modules/@angular/router';
import { Subscription } from '../../../node_modules/rxjs';
import { ProduitsService } from '../services/produits.service';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css']
})
export class ProductsDetailsComponent implements OnInit, OnDestroy {

  produit: IProduit ;
  code: string;
  subscription: Subscription;

  constructor(private _route: ActivatedRoute, private _router: Router,
              private _service: ProduitsService) { }

  ngOnInit() {
    // this.code =  this._route.snapshot.paramMap.get('id');
    this.subscription = this._route
      .paramMap
      .subscribe(
        res => {
               this.code = res.get('id');
               }
      );
     this._service.getProduitById(this.code).subscribe(
         res => {
            this.produit = res;
         }
     );
  }
  navigateToList() {
     this._router.navigate(['/list']);   // Navigation programmatique
  }



  // It is advised to unsubscribe in ngOnDestry()
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
