import { Component } from '@angular/core';
import { NoticiaService } from './services/noticia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'noticiasdanna';
  listNoticias: any[] = [];
  laoding = false;

  constructor (private noticiaService: NoticiaService) {

  }

  buscarNoticias(parametros: any) {
    this.laoding = true;
    this.noticiaService.getNoticias(parametros).subscribe(data => {
      console.log(data)
      this.listNoticias = data.articles;
      this.laoding = false;
    }, error => {
      console.log(error);
      this.laoding = false;
    });

  }
}
