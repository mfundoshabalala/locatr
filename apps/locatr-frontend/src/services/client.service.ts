import { Injectable } from '@angular/core';;
import { firstValueFrom, lastValueFrom } from 'rxjs';

import { HttpClient } from '@angular/common/http';

interface ClientEntity {
  clientID?: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  createdAt?: Date;
  createdBy?: string;
  updatedAt?: Date;
  updatedBy?: string;
}

@Injectable({ providedIn: 'root' })
export class ClientService {
  private clientUrl = 'http://localhost:3000/api/client';

  constructor(private http: HttpClient) {}

  getClientList(): Promise<ClientEntity[]> {
    return lastValueFrom(this.http.get<ClientEntity[]>(this.clientUrl));
  }

  getClientByID(id: number): Promise<ClientEntity> {
    return firstValueFrom(this.http.get<ClientEntity>(`${this.clientUrl}/${id}`));
  }

  createClient(client: ClientEntity): Promise<ClientEntity> {
    return firstValueFrom(this.http.post<ClientEntity>(this.clientUrl, client));
  }

  updateClient(id: number, client: ClientEntity): Promise<ClientEntity> {
    return firstValueFrom(this.http.put<ClientEntity>(`${this.clientUrl}/${id}`, client));
  }

  deleteClient(id: number): Promise<void> {
    return firstValueFrom(this.http.delete<void>(`${this.clientUrl}/${id}`));
  }
}