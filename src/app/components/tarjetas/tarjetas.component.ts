import {Component, Input} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html'
})
export class TarjetasComponent {

  @Input() items: any[] = [];


  constructor(private router:Router) {
  }

  verArtista(item: any) {
    console.log(item);
    let artistaID;
    if (item.type === 'artist') {
      artistaID = item.id;
    } else {
      artistaID = item.artists[0].id;
    }
    console.log(artistaID);
    this.router.navigate(['/artist',artistaID]);

  }

}
