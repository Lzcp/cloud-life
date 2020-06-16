import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class LoginGuardService implements CanActivate {
    constructor(private router: Router) {

    }
    canActivate() {
        const loggedIn = true; // 判断当前用户是否有权限
        if (!loggedIn) { this.router.navigate(['/home']); }
        return loggedIn;
    }
}
