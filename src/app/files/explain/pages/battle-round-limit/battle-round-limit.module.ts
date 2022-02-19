import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { BattleRoundLimitRoutingModule } from "./battle-round-limit-routing.module";
import { PageComponent } from "./page/page.component";

@NgModule({
    declarations: [
        PageComponent
    ],
    imports: [
        CommonModule,
        BattleRoundLimitRoutingModule
    ]
})

export class BattleRoundLimitModule {}
