import { Injectable } from '@angular/core';

import { AbstractService } from '@profolio/core';
import { UserInterface } from '@profolio/interfaces';

@Injectable({ providedIn: 'root' })
export class UserService extends AbstractService<UserInterface> {
  protected baseUrl = process.env["LOCATR_API_URL"] + 'user';
}
