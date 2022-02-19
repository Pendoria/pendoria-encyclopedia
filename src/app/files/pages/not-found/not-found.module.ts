import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { NotFoundRoutingModule } from "./not-found-routing.module";
import { PageComponent } from "./page/page.component";
import { AppLinkModule } from "../../../modules/app-link/app-link.module";

@NgModule({
    declarations: [
        PageComponent
    ],
    imports: [
        CommonModule,
        NotFoundRoutingModule,
        AppLinkModule
    ]
})
export class NotFoundModule {}
