import { Component, OnInit, ViewEncapsulation } from "@angular/core";

@Component({
    selector: "app-sheet",
    templateUrl: "./sheet.component.html",
    styleUrls: ["./sheet.component.scss"],
    host: { "class": "sheet-wrapper-component" },
    encapsulation: ViewEncapsulation.None,
})

export class SheetComponent implements OnInit {

    constructor () {}

    ngOnInit (): void {}

}
