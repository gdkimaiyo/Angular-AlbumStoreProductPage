import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Product } from './product';

import { Album } from './album';

@Injectable()
export class ProductService {
  private _albumUrl: string = '../assets/album.json';
  private _productsUrl: string = '../assets/products.json';

  getAlbum(id: number):Observable<Album> {
    return this._http.get(this._albumUrl)
      .map(response => <Album>response.json());
  }

  getProducts():Observable<Product[]> {
    return this._http.get(this._productsUrl)
      .map(response => <Product[]>response.json());
  }

  constructor( private _http: Http ) { }

}
