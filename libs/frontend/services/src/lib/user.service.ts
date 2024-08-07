import { Injectable } from '@angular/core';

import { AbstractService } from './abstract.service';
import { UserInterface } from 'libs/interfaces/src/lib/user.interface';

@Injectable({ providedIn: 'root' })
export class UserService extends AbstractService<UserInterface> {
  protected baseUrl = 'http://localhost:3000/api/user';
}
