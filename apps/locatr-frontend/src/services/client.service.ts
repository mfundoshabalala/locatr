import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { firstValueFrom, lastValueFrom } from 'rxjs';

import { ClientEntity } from '@profolio/interfaces';

@Injectable({ providedIn: 'root' })
export class ClientService {
  private http = inject(HttpClient);

  private clientUrl = 'http://localhost:3000/api/client';

  async getClients(): Promise<ClientEntity[]> {
    try {
      return await lastValueFrom(this.http.get<ClientEntity[]>(this.clientUrl));
    } catch (error) {
      throw new Error(`Error getting client list: ${(error as Error).message}`);
    }
  }

  async getClientByID(id: string): Promise<ClientEntity> {
    try {
      return await firstValueFrom(this.http.get<ClientEntity>(`${this.clientUrl}/${id}`));
    } catch (error) {
      throw new Error(`Error getting client by ID: ${(error as Error).message}`);
    }
  }

  async createClient(client: ClientEntity): Promise<ClientEntity> {
    try {
      return await firstValueFrom(this.http.post<ClientEntity>(this.clientUrl, client));
    } catch (error) {
      throw new Error(`Error creating client: ${(error as Error).message}`);
    }
  }

  async updateClient(id: string, client: ClientEntity): Promise<ClientEntity> {
    try {
      return await firstValueFrom(this.http.patch<ClientEntity>(`${this.clientUrl}/${id}`, client));
    } catch (error) {
      throw new Error(`Error updating client: ${(error as Error).message}`);
    }
  }

  async deleteClient(id: string): Promise<void> {
    try {
      await firstValueFrom(this.http.delete<ClientEntity>(`${this.clientUrl}/${id}`));
    } catch (error) {
      throw new Error(`Error deleting client: ${(error as Error).message}`);
    }
  }
}
