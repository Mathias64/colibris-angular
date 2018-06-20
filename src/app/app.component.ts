import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {


    public constructor(private titleService: Title, private route:Router, private authService:AuthService) {
        authService.getProfAuth();
        if(!authService.profAuth) {
            this.route.navigateByUrl("/connexion");
        }
    }

    public setTitle( newTitle: string) {
        this.titleService.setTitle( newTitle);
    }
}
