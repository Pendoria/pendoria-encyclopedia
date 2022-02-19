import { Component, OnInit, ViewEncapsulation } from "@angular/core";

@Component({
    selector: "app-sheet-body",
    templateUrl: "./sheet-body.component.html",
    styleUrls: ["./sheet-body.component.scss"],
    host: { "class": "sheet-body-component" },
    encapsulation: ViewEncapsulation.None,
})

export class SheetBodyComponent implements OnInit {

    constructor () { }

    ngOnInit (): void {
    }

}
