import { Component } from '@angular/core';
import { Account } from './account.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  nomeRicevutoOutput: string;

  onRegistraNome(nomeRicevuto: string){
    console.log(nomeRicevuto);
    this.nomeRicevutoOutput = nomeRicevuto;
  }
}
