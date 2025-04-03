import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environment/environment';
import { SaveClientesRequest, SaveClientesResponse, UpdateClientesRequest, UpdateClientesResponse, ListClientesResponse, DetailClientesResponse } from '../api-clients/clientes.services';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private apiUrl = `${environment.apiUrl}/clientes`;

  constructor(private http: HttpClient) {}

  // Cadastra um novo cliente
  cadastrar(cliente: SaveClientesRequest) {
    return this.http.post<SaveClientesResponse>(this.apiUrl, cliente);
  }

  // Busca um cliente por ID
  buscarPorId(id: number) {
    return this.http.get<ListClientesResponse>(`${this.apiUrl}/${id}`);
  }

  // Atualiza um cliente existente
  atualizar(id: number, cliente: UpdateClientesRequest) {
    return this.http.patch<UpdateClientesResponse>(`${this.apiUrl}/${id}`, cliente);
  }
}
