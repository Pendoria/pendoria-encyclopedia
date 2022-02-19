import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { Puls3RoutingModule } from "./puls3-routing.module";
import { PageComponent } from "./page/page.component";
import { AppLinkModule } from "../../../../modules/app-link/app-link.module";

@NgModule({
    declarations: [
        PageComponent
    ],
    imports: [
        CommonModule,
        Puls3RoutingModule,
        AppLinkModule
    ]
})

export class Puls3Module {}
