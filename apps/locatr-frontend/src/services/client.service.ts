import { Injectable } from '@angular/core';;
import { Observable } from 'rxjs';

import { IClient } from '@profolio/interfaces';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ClientService {
  private apiUrl = 'http://localhost:3000/api/clients';

  constructor(private http: HttpClient) {}

  getClients(): Observable<IClient[]> {
    return this.http.get<IClient[]>(this.apiUrl);
  }

  getClient(id: number): Observable<IClient> {
    return this.http.get<IClient>(`${this.apiUrl}/${id}`);
  }

  createClient(client: IClient): Observable<IClient> {
    return this.http.post<IClient>(this.apiUrl, client);
  }

  updateClient(id: number, client: IClient): Observable<IClient> {
    return this.http.put<IClient>(`${this.apiUrl}/${id}`, client);
  }

  deleteClient(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}