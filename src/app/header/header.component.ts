import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

   constructor(private _service: AuthenticationService) { }

    ngOnInit() {
    }
    isLoggedIn(): boolean {
       return this._service.isLoggedIn();
    }

    getJwtSubjet(): string {
       return this._service.getJwtSubjet();
    }

}
