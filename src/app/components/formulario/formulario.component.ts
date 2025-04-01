import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  @Output() parametrosSeleccionados = new EventEmitter<any>();
  categoriaSeleccionada = 'business';
  paisSeleccionado = 'us';
  categorias: any[] = [
    {value: 'general', nombre: 'General'},
    {value: 'business', nombre: 'Negocios'},
    {value: 'entertaiment', nombre: 'Entretenimiento'},
    {value: 'health', nombre: 'Salud'},
    {value: 'science', nombre: 'Ciencia'},
    {value: 'sports', nombre: 'Deportes'},
    {value: 'technology', nombre: 'Tecnologia'},
  ]

  paises: any[] = [
    {value: 'mx', nombre: 'Mexico'},
    {value: 'us', nombre: 'USA'},
    {value: 'br', nombre: 'Brasil'},
    {value: 'fr', nombre: 'Francia'},
    {value: 'hu', nombre: 'Hungria'},
    {value: 'gb', nombre: 'Reino Unido'},
    {value: 'ar', nombre: 'Argentina'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

  buscarNoticia() {
    const PARAMETROS = {
      categoria: this.categoriaSeleccionada,
      pais: this.paisSeleccionado
    }

    this.parametrosSeleccionados.emit(PARAMETROS);
  }

}
