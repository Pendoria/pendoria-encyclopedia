import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AppLinkComponent } from "./app-link.component";
import { RouterModule } from "@angular/router";

@NgModule({
    declarations: [
        AppLinkComponent
    ],
    exports: [
        AppLinkComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ]
})

export class AppLinkModule {}
