import { HttpClient } from '@angular/common/http';
import { firstValueFrom, lastValueFrom } from 'rxjs';
import { inject, Injectable, signal } from '@angular/core';;

import { ClientEntity } from '@profolio/interfaces';

@Injectable({ providedIn: 'root' })
export class ClientService {
  private http = inject(HttpClient);

  private clientUrl = 'http://localhost:3000/api/client';
  clientList = signal<ClientEntity[]>([]);

  async loadData(): Promise<void> {
    let entityList: ClientEntity[] = [];
    try {
      entityList = await this.getClients();
    } catch (error) {
      throw new Error(`Error loading client data: ${(error as Error).message}`);
    } finally {
      this.clientList.set(entityList);
    }
  }

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

  async createClient(client: ClientEntity): Promise<void> {
    try {
      const entity = await firstValueFrom(this.http.post<ClientEntity>(this.clientUrl, client));
      this.clientList.update((list) => [...list, entity]);
    } catch (error) {
      throw new Error(`Error creating client: ${(error as Error).message}`);
    }
  }

  async updateClient(id: string, client: ClientEntity): Promise<void> {
    try {
      const entity = await firstValueFrom(this.http.put<ClientEntity>(`${this.clientUrl}/${id}`, client));
      this.clientList.update((list) => list.map((item) => (item.id === id ? entity : item)));
    } catch (error) {
      throw new Error(`Error updating client: ${(error as Error).message}`);
    }
  }

  async deleteClient(id: string): Promise<void> {
    try {
      await firstValueFrom(this.http.delete<ClientEntity>(`${this.clientUrl}/${id}`));
      this.clientList.update((list) => list.filter((item) => item.id !== id));
    } catch (error) {
      throw new Error(`Error deleting client: ${(error as Error).message}`);
    }
  }
}
