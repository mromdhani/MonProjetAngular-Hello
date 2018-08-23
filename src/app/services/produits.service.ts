import { Injectable } from '@angular/core';
import { IProduit } from '../domain/iproduit';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProduitsService {

   URL =  'http://localhost:8080/produits/';

  constructor(private _Http: HttpClient ) {}

  addProduit(produit: IProduit): Observable<any> {
      return this._Http.post(this.URL, produit);
  }

  getProduitById(id: string): Observable<IProduit> {
    console.log ('Appel du REST : ' + this.URL + id);
    return this._Http.get<IProduit>(this.URL + id);

    //  return   { code: 'BIDON FROM Service',
    //              titre: 'BIDON Titre',
    //              prixUnitaire: 123.45
    //           };
  }

  getProduits(): Observable<IProduit[]> {

    return this._Http.get<IProduit[]>(this.URL);

    // return [
    //   { code: 'P1000', titre: 'FROM SERVICE - Cafe', prixUnitaire: 5.5 },
    //   { code: 'P2000', titre: 'Thé', prixUnitaire: 4.5 },
    //   { code: 'P3000', titre: 'Jus', prixUnitaire: 7.5 }
    // ];
  }
}
