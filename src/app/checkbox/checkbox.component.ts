import { Component, OnInit, Host, Input } from '@angular/core';
import { CheckboxGroupComponent } from '../checkbox-group/checkbox-group.component';

@Component({
    selector: 'checkbox',
    templateUrl: './checkbox.component.html',
    styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit {
    @Input() value: any;

    constructor(@Host() private checkboxGroup: CheckboxGroupComponent) {
    }

    ngOnInit() {
    }

    toggleCheck() {
        this.checkboxGroup.addOrRemove(this.value);
    }

    isChecked() {
        return this.checkboxGroup.contains(this.value);
    }
}