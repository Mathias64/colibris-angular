import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AuthService } from '../services/auth.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    title: string;

    public constructor(private titleService: Title, private authService: AuthService) {
        this.title = this.titleService.getTitle();
        // console.log("Title = " + this.title);
        // console.log("profAuth = ", authService.profAuth);
        // console.log("docuAuth = ", authService.docuAuth);
        // console.log("adminAuth = ", authService.adminAuth);
        // console.log("connected = ", authService.adminAuth);
    }
  
    ngOnInit() {}

}
