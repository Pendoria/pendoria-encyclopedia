import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SheetComponent } from "./components/sheet/sheet.component";
import { SheetBodyComponent } from "./components/sheet-body/sheet-body.component";

@NgModule({
    declarations: [
        SheetComponent,
        SheetBodyComponent
    ],
    exports: [
        SheetComponent,
        SheetBodyComponent
    ],
    imports: [
        CommonModule
    ]
})
export class SheetModule {}
