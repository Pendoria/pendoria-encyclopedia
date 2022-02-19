import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { EliteUiRoutingModule } from "./elite-ui-routing.module";
import { PageComponent } from "./page/page.component";
import { AppLinkModule } from "../../../../modules/app-link/app-link.module";

@NgModule({
    declarations: [
        PageComponent
    ],
    imports: [
        CommonModule,
        EliteUiRoutingModule,
        AppLinkModule
    ]
})

export class EliteUiModule {}
