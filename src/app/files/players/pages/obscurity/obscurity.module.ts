import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PageComponent } from "./page/page.component";
import { ObscurityRoutingModule } from "./obscurity-routing.module";
import { AppLinkModule } from "../../../../modules/app-link/app-link.module";

@NgModule({
    declarations: [
        PageComponent
    ],
    imports: [
        CommonModule,
        ObscurityRoutingModule,
        AppLinkModule
    ]
})

export class ObscurityModule {}
