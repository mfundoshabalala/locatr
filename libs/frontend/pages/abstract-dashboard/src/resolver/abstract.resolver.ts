
import { Injectable, Type } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AbstractService } from '@profolio/frontend/pages/abstract-dashboard';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EntityResolver<T> implements Resolve<Promise<T[]>> {
  constructor(private service: AbstractService<T>) {}

  async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<T[]> {
    return await this.service.getAll();
  }
}
