import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Globals } from 'src/app/global';
import { ClientModel } from '../models/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(
    private http: HttpClient,
    private globals: Globals,
  ) { }

  public getAll() {
    const url_api = this.globals.urlApi + `api/Client/GetAll`;
    return this.http.get(url_api);
  }

  public getById(clientId: number) {
    const url_api = this.globals.urlApi + `api/Client/GetById?clientId=${clientId}`;
    return this.http.get(url_api);
  }

  public post(client: ClientModel) {
    const urlAPI = this.globals.urlApi + `api/Client/Create`;
    return this.http.post(urlAPI, client);
  }

  public put(client: ClientModel) {
    const urlAPI = this.globals.urlApi + `api/Client/Update`;
    return this.http.put(urlAPI, client);
  }

  public delete(clientId: number) {
    const url_api = this.globals.urlApi + `api/Client/Delete?clientId=${clientId}`;
    return this.http.delete(url_api);
  }
}
