import { Injectable } from '@angular/core';
import { isString } from 'util';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    profAuth:boolean  = false;
    docuAuth:boolean  = false;
    adminAuth:boolean = false;
    connected:boolean = false;

    constructor() { }

    setAuth(id:string, bool:boolean) {
        this[id] = bool;
        sessionStorage.setItem(id, bool.toString());
        this.connected = bool;
        sessionStorage.setItem('connected', bool.toString());
        // console.log(id,"Auth = ", this[id], "  ",id,"Session = ", bool.toString());
        // console.log("Connected = ", this.connected, "   bool = ", bool.toString());
    }
    getAuth() {
        switch (true) {
            case isString(sessionStorage.getItem('profAuth')):
                this.profAuth = eval(sessionStorage.getItem('profAuth'));
                break;
            case isString(sessionStorage.getItem('docuAuth')):
                this.profAuth = eval(sessionStorage.getItem('docuAuth'));
                break;
            case isString(sessionStorage.getItem('adminAuth')):
                this.profAuth = eval(sessionStorage.getItem('adminAuth'));
                break;
            case isString(sessionStorage.getItem('connected')):
                this.connected = eval(sessionStorage.getItem('connected'));
                // console.log("sessionStorage = ", sessionStorage.getItem('connected'));
                break;
        }
    }

    deconnect() {
        this.profAuth = false;
        sessionStorage.setItem('profAuth', 'false');
        this.docuAuth = false;
        sessionStorage.setItem('docuAuth', 'false');
        this.adminAuth = false;
        sessionStorage.setItem('adminAuth', 'false');
        this.connected = false;
        sessionStorage.setItem('connected', 'false');
    }


    setProfAuth(bool:boolean) {
        this.profAuth = bool;
        sessionStorage.setItem('profAuth', bool.toString());
        console.log("profAuth = ", this.profAuth, "  profSession = ", bool.toString());
    }
    getProfAuth() {
        if(sessionStorage.getItem('profAuth')) {
            this.profAuth = eval(sessionStorage.getItem('profAuth'));
        }
    }

    setDocuAuth(bool:boolean) {
        this.docuAuth = bool;
        sessionStorage.setItem('docuAuth', bool.toString());
        console.log("docuAuth : ", this.docuAuth, "  docuSession = ", bool.toString());
    }
    getDocuAuth() {
        if(sessionStorage.getItem('profAuth')) {
            this.profAuth = eval(sessionStorage.getItem('profAuth'));
        }
    }

    setAdminAuth(bool:boolean) {
        this.adminAuth = bool;
        sessionStorage.setItem('adminAuth', bool.toString());
        console.log("Authentification admin : ", this.adminAuth);
    }
    getAdminAuth() {
        if(sessionStorage.getItem('profAuth')) {
            this.profAuth = eval(sessionStorage.getItem('profAuth'));
        }
    }
}
