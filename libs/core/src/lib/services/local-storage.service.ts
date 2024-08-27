import { Injectable } from '@angular/core';

export enum LocalStorageTypes {
  LOCAL = 'local',
  SESSION = 'session',
}

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  /**
   * Set an item in localStorage or sessionStorage
   */
  setItem(type: LocalStorageTypes, key: string, value: any): void {
    const stringValue = JSON.stringify(value);
    if (type === LocalStorageTypes.LOCAL) {
      localStorage.setItem(key, stringValue);
    } else if (type === LocalStorageTypes.SESSION) {
      sessionStorage.setItem(key, stringValue);
    }
  }

  /**
   * Get an item from localStorage or sessionStorage
   */
  getItem<T>(type: LocalStorageTypes, key: string): T | null {
    let item: string | null = null;
    if (type === LocalStorageTypes.LOCAL) {
      item = localStorage.getItem(key);
    } else if (type === LocalStorageTypes.SESSION) {
      item = sessionStorage.getItem(key);
    }

    if (item) {
      try {
        return JSON.parse(item) as T;
      } catch (error) {
        console.error(`Error parsing JSON from ${type}Storage for key "${key}":`, error);
        return null;
      }
    }

    return null;
  }

  /**
   * Remove an item from localStorage or sessionStorage
   */
  removeItem(type: LocalStorageTypes, key: string): void {
    if (type === LocalStorageTypes.LOCAL) {
      localStorage.removeItem(key);
    } else if (type === LocalStorageTypes.SESSION) {
      sessionStorage.removeItem(key);
    }
  }

  /**
   * Clear all items from localStorage or sessionStorage
   */
  clear(type: LocalStorageTypes): void {
    if (type === LocalStorageTypes.LOCAL) {
      localStorage.clear();
    } else if (type === LocalStorageTypes.SESSION) {
      sessionStorage.clear();
    }
  }
}
