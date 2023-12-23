import { Storage } from "../enums/storage-keys.enum";

class VaultService {
  storage = localStorage;

  setItem<T>(key: string, value: T): void {
    this.storage.setItem(key, JSON.stringify(value));
  }

  removeItem(key: string): void {
    this.storage.removeItem(key);
  }

  getItem<T = string>(key: string): T {
    try {
      return JSON.parse(this.storage.getItem(key) as string);
    } catch (error) {
      console.error(error);
    }

    return this.storage.getItem(key) as unknown as T;
  }

  getToken() {
    return this.getItem(Storage.Token);
  }

  setToken(token: string) {
    return this.setItem(Storage.Token, token);
  }

  clearStorage(): void {
    this.storage.clear();
  }
}

export default new VaultService();
