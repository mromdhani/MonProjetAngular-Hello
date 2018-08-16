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

  getProduits(): Observable<IProduit[]> {

    return this._Http.get<IProduit[]>(this.URL);

    // return [
    //   { code: 'P1000', titre: 'FROM SERVICE - Cafe', prixUnitaire: 5.5 },
    //   { code: 'P2000', titre: 'Thé', prixUnitaire: 4.5 },
    //   { code: 'P3000', titre: 'Jus', prixUnitaire: 7.5 }
    // ];
  }
}
