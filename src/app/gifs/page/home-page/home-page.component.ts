import { Component } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interface';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

    constructor(private _gifsServices: GifsService){

    }

    get gifs(): Gif[]{
      return this._gifsServices.gifList
    }
}
