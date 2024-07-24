import { Injectable, signal } from '@angular/core';

@Injectable({providedIn: 'root'})
export class LoaderService {
	private _loading = signal(false);

	get loading() {
		return this._loading;
	}

	show() {
		this._loading.set(true);
	}

	hide() {
		this._loading.set(false);
	}
}