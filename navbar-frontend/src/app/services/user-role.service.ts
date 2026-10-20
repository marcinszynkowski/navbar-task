import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserRoleService {
  constructor(private http: HttpClient) {}

  getUserRoles(): Observable<string[]> {
    return this.http.get<string[]>('https://localhost:7071/me');
  }
}
