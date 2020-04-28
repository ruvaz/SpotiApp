import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent implements OnInit {

  loading: boolean;

   artista:any = {};
   topTracks: any[] = [];

  constructor(private router: ActivatedRoute, private spotifyService: SpotifyService) {
    this.loading = true;
    // recibir parametros de GET del router
    this.router.params.subscribe(params => {
      console.log(params.id);
      this.getArtistaById(params.id);
      this.getTopTracks(params.id);
      this.loading = false;
    });
  }

  ngOnInit(): void {
  }

  getArtistaById(id: string) {
    this.loading = true;
    this.spotifyService.getArtista(id)
      .subscribe(artista => {
        console.log(artista);
        this.artista = artista;
      });
    this.loading = false;
  }

  getTopTracks(id: string) {
    this.spotifyService.getTopTracks(id)
      .subscribe(topTracks => {
        this.topTracks = topTracks;
        console.log(this.topTracks);
      });
  }
}
