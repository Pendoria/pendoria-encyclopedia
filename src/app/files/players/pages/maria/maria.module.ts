import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MariaRoutingModule } from "./maria-routing.module";
import { AppLinkModule } from "../../../../modules/app-link/app-link.module";
import { PageComponent } from "./page/page.component";

@NgModule({
    declarations: [
        PageComponent
    ],
    imports: [
        CommonModule,
        MariaRoutingModule,
        AppLinkModule
    ]
})

export class MariaModule {}
