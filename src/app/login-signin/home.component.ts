import { Component, ViewChild } from "@angular/core";

@Component({
    selector:'home-component',
    templateUrl:'./home.component.html',
    styleUrls:['./home.component.scss'],
})


export class HomeComponent
{
    @ViewChild('login',{static:true}) loginForm : HTMLFormElement;
}