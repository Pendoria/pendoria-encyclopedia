import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SilentRoutingModule } from "./silent-routing.module";
import { PageComponent } from "./page/page.component";
import { AppLinkModule } from "../../../../modules/app-link/app-link.module";

@NgModule({
    declarations: [
        PageComponent
    ],
    imports: [
        CommonModule,
        SilentRoutingModule,
        AppLinkModule
    ]
})
export class SilentModule {}
