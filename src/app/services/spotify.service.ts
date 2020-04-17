import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

// providedIn es como actulmente auto incluye servicios customizados
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Spotify Service Listo');
  }

  getNewReleases() {
    // creacion de header para el authorize
    const headers = new HttpHeaders({
      Authorization: 'Bearer BQDGwiOmiSMVgHwKffCdvDmumhqJwNaeFZeZC0g9DW7WRvP9mKUFyzwLSd3lNbybL70UqUHM0UmR5-nob3k'
    });

    // GET + header
    this.http.get('https://api.spotify.com/v1/browse/new-releases',{headers})
      .subscribe(resp => {
        console.log(resp);
      });
  }
}
