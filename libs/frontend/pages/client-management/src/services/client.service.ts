import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { firstValueFrom, lastValueFrom } from 'rxjs';

import { ClientInterface } from '@profolio/interfaces';

@Injectable({ providedIn: 'root' })
export class ClientService {
  private http = inject(HttpClient);

  private clientUrl = 'http://localhost:3000/api/client';

  async getClients(): Promise<ClientInterface[]> {
    try {
      return await lastValueFrom(this.http.get<ClientInterface[]>(this.clientUrl));
    } catch (error) {
      throw new Error(`Error getting client list: ${(error as Error).message}`);
    }
  }

  async getClientByID(id: string): Promise<ClientInterface> {
    try {
      return await firstValueFrom(this.http.get<ClientInterface>(`${this.clientUrl}/${id}`));
    } catch (error) {
      throw new Error(`Error getting client by ID: ${(error as Error).message}`);
    }
  }

  async createClient(client: ClientInterface): Promise<ClientInterface> {
    try {
      return await firstValueFrom(this.http.post<ClientInterface>(this.clientUrl, client));
    } catch (error) {
      throw new Error(`Error creating client: ${(error as Error).message}`);
    }
  }

  async updateClient(id: string, client: ClientInterface): Promise<ClientInterface> {
    try {
      return await firstValueFrom(this.http.patch<ClientInterface>(`${this.clientUrl}/${id}`, client));
    } catch (error) {
      throw new Error(`Error updating client: ${(error as Error).message}`);
    }
  }

  async deleteClient(id: string): Promise<void> {
    try {
      await firstValueFrom(this.http.delete<ClientInterface>(`${this.clientUrl}/${id}`));
    } catch (error) {
      throw new Error(`Error deleting client: ${(error as Error).message}`);
    }
  }
}
