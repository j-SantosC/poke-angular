import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class LocalStorageService {
    constructor() {}

    // Save data to localStorage
    setItem(key: string, value: any): void {
        const jsonData = JSON.stringify(value);
        localStorage.setItem(key, jsonData);
    }

    // Retrieve data from localStorage
    getItem<T>(key: string): T | null {
        const jsonData = localStorage.getItem(key);
        if (jsonData) {
            return JSON.parse(jsonData) as T;
        }
        return null;
    }
}
