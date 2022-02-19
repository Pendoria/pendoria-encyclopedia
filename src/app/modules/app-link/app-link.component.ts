import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: "app-link",
    templateUrl: "./app-link.component.html",
    styleUrls: ["./app-link.component.scss"]
})

export class AppLinkComponent implements OnInit {

    @Input("path") public path: string[] | string = "";

    constructor () {}

    ngOnInit (): void {}

}
