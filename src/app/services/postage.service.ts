import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { Postage } from '../models/postage.model';

@Injectable({
  providedIn: 'root'
})
export class postageService{


  constructor(private httpClient: HttpClient){ }

  private url = environment.api;


  getPostage(){
    console.log(this.url)
    return this.httpClient.get<Postage[]>(this.url + '/posts/all')

  }
}

