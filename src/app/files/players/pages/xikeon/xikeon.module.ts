import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { XikeonRoutingModule } from "./xikeon-routing.module";
import { PageComponent } from "./page/page.component";
import { AppLinkModule } from "../../../../modules/app-link/app-link.module";

@NgModule({
    declarations: [
        PageComponent
    ],
    imports: [
        CommonModule,
        XikeonRoutingModule,
        AppLinkModule
    ]
})
export class XikeonModule {}
