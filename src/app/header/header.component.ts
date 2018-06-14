import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    title: string;

    public constructor(private titleService: Title ) {
        this.title = this.titleService.getTitle();
        console.log("Title = " + this.title);
    }
  
    ngOnInit() {}

}
