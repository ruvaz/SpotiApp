import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';

// providedIn es como actulmente auto incluye servicios customizados
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Spotify Service Listo');
  }

  token: string = 'BQAfj_L0Z3uggdEZFBgc33RvGQIIY9r5-43I96LIwosBoLpd3dkNVDWnOr4NJQlXlAoot3N8wVAF6Z-EA_4';

  // creacion de header para el authorize


  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + this.token
    });
    return this.http.get(url, {headers});
  }

  // obtiene los artistas para el home
  getNewReleases() {
    return this.getQuery('browse/new-releases')
      .pipe(map(data => data['albums'].items));  //pipe con map para filtrar la informacion desde este nivel.

  }

  // obtiene los artistas para el search
  getArtistas(termino: string) {
    return this.getQuery(`search?q=${termino}&type=artist&market=US&limit=15&offset=5`)
      .pipe(map(data => data['artists'].items)); //pip map filter artist.items retur array
  }

  // obtiene artista by ID
  getArtista(id: string) {
    return this.getQuery(`artists/${id}`);
    //.pipe(map(data => data['artists'].items));
  }


  getTopTracks(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?country=us`)
      .pipe(map(data => data['tracks']));
  }
}
