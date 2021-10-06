import {Inject, Injectable} from "@angular/core";
import {SESSION_STORAGE, StorageService} from "ngx-webstorage-service";

@Injectable({ providedIn: "root" })
export class StateStorageService {
  private previousUrlKey = "previousUrl";

  constructor(@Inject(SESSION_STORAGE) private sessionStorage: StorageService,
  ) {}

  storeUrl(url: string): void {
    this.sessionStorage.set(this.previousUrlKey, url);
  }

  getUrl(): string | null | undefined {
    return this.sessionStorage.get(this.previousUrlKey);
  }

  clearUrl(): void {
    this.sessionStorage.remove(this.previousUrlKey);
  }
}
