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
      const request = this.http.post<T>(this.baseUrl, entity);
      return await firstValueFrom(request);
    } catch (error) {
      throw new Error(`Error creating entity: ${(error as Error).message}`);
    }
  }

  async read(id: string): Promise<T> {
    try {
      const url = this.baseUrl + '?id=' + id;
      const request = this.http.get<T>(url);
      return await firstValueFrom(request);
    } catch (error) {
      throw new Error(`Error getting entity: ${(error as Error).message}`);
    }
  }

  async update(id: string, entity: T): Promise<T> {
    try {
      const url = this.baseUrl + '?id=' + id;
      const request = this.http.patch<T>(url, entity)
      return await firstValueFrom(request);
    } catch (error) {
      throw new Error(`Error updating entity: ${(error as Error).message}`);
    }
  }

  async delete(id: string): Promise<void> {
    try {
      const url = this.baseUrl + '?id=' + id;
      await firstValueFrom(this.http.delete<void>(url));
    } catch (error) {
      throw new Error(`Error deleting entity: ${(error as Error).message}`);
    }
  }
}
