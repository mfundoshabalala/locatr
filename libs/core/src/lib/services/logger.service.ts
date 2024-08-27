import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  log(message: string, ...optionalParams: any[]): void {
    console.log(`[LOG]: ${message}`, ...optionalParams);
  }

  warn(message: string, ...optionalParams: any[]): void {
    console.warn(`[WARN]: ${message}`, ...optionalParams);
  }

  error(message: string, ...optionalParams: any[]): void {
    console.error(`[ERROR]: ${message}`, ...optionalParams);
  }

  info(message: string, ...optionalParams: any[]): void {
    console.info(`[INFO]: ${message}`, ...optionalParams);
  }

  // debug(message: string, ...optionalParams: any[]): void {
  debug(message: string): void {
    console.debug(`[DEBUG]: ${message}`);
  }
}
