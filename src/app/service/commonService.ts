import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

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


@Injectable()
export class GlobalService {
    private subject = new Subject<any>();
    sendMessage(message) {
        this.subject.next({ text: message });
    }
    clearMessage() {
        this.subject.next();
    }
    getMessage(): Observable<any> {
        return this.subject.asObservable();
    }
}
