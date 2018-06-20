import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    profAuth:boolean = false;
    docuAuth:boolean = false;
    adminAuth:boolean = false;

    constructor() { }

    setAuth(id:string, bool:boolean) {
        this[id] = bool;
        sessionStorage.setItem(id, bool.toString());
        console.log(id,"Auth = ", this[id], "  ",id,"Session = ", bool.toString());
    }
    getAuth() {
        switch sessionStorage.getItem() {
            case 'profAuth':
                this.profAuth = eval(sessionStorage.getItem('profAuth'));
                break;
            
        }
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
