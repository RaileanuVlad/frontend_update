import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ApiService } from '../shared/api.service';
import { Scoala } from '../models/scoala.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
    private currentUserSubject: BehaviorSubject<Scoala>;
    public currentUser: Observable<Scoala>;

    constructor(private http: HttpClient, private api: ApiService) {
        this.currentUserSubject = new BehaviorSubject<Scoala>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): Scoala {
        return this.currentUserSubject.value;
    }

    public getUser(): Observable<Scoala | null> {
        return this.currentUser;
    }

    login(email: string, parola: string) {
        return this.http.post<any>(`${this.api.baseUrl}/scoala/authenticate`, { email, parola })
            .pipe(map(user => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
                this.currentUserSubject.next(user);
                return user;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
}