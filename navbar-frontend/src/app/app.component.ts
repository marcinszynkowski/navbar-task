import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';

import { UserRoleService } from './services/user-role.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'navbar-frontend';
  userRoles: string[] = [];
  isLoading = true;
  errorMessage = '';

  private userRoleService = inject(UserRoleService);

  ngOnInit(): void {
    this.userRoleService.getUserRoles().subscribe({
      next: (roles) => {
        if (roles && roles.length > 0) {
          this.userRoles = roles;
        }
        this.isLoading = false;
      },
      error: () => {
        this.errorMessage = 'Unable to load user roles.';
        this.isLoading = false;
      }
    });
  }
}
