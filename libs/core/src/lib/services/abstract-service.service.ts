import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { firstValueFrom, lastValueFrom } from 'rxjs';

@Injectable()
export abstract class AbstractService<T> {
  protected http = inject(HttpClient);
  protected abstract baseUrl: string; // Base URL for the API endpoint

  async getAll(): Promise<T[]> {
    try {
      return await lastValueFrom(this.http.get<T[]>(this.baseUrl));
    } catch (error) {
      throw new Error(`Error getting list: ${(error as Error).message}`);
    }
  }

  async create(entity: T): Promise<T> {
    try {
      return await firstValueFrom(this.http.post<T>(this.baseUrl, entity));
    } catch (error) {
      throw new Error(`Error creating entity: ${(error as Error).message}`);
    }
  }

  async read(id: string): Promise<T> {
    try {
      return await firstValueFrom(this.http.get<T>(`${this.baseUrl}/${id}`));
    } catch (error) {
      throw new Error(`Error getting entity: ${(error as Error).message}`);
    }
  }

  async update(id: string, entity: T): Promise<T> {
    try {
      return await firstValueFrom(this.http.patch<T>(`${this.baseUrl}/${id}`, entity));
    } catch (error) {
      throw new Error(`Error updating entity: ${(error as Error).message}`);
    }
  }

  async delete(id: string): Promise<void> {
    try {
      await firstValueFrom(this.http.delete<void>(`${this.baseUrl}/${id}`));
    } catch (error) {
      throw new Error(`Error deleting entity: ${(error as Error).message}`);
    }
  }
}
