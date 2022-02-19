import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [

    {
        path: "",
        loadChildren: () => import("./files/pages/index/index.module").then(m => m.IndexModule)
    },

    {
        path: "about",
        loadChildren: () => import("./files/pages/pendoria/pendoria.module").then(m => m.PendoriaModule)
    },

    {
        path: "explain",
        children: [
            {
                path: "battle-round-limit",
                loadChildren: () => import("./files/explain/pages/battle-round-limit/battle-round-limit.module").then(m => m.BattleRoundLimitModule)
            },
        ]
    },

    {
        path: "players",
        children: [
            {
                path: "puls3",
                loadChildren: () => import("./files/players/pages/puls3/puls3.module").then(m => m.Puls3Module)
            },
            {
                path: "maria",
                loadChildren: () => import("./files/players/pages/maria/maria.module").then(m => m.MariaModule)
            },
            {
                path: "xortrox",
                loadChildren: () => import("./files/players/pages/xortrox/xortrox.module").then(m => m.XortroxModule)
            },
            {
                path: "zampa",
                loadChildren: () => import("./files/players/pages/zampa/zampa.module").then(m => m.ZampaModule)
            },
            {
                path: "gale",
                loadChildren: () => import("./files/players/pages/gale/gale.module").then(m => m.GaleModule)
            },
            {
                path: "kidel",
                loadChildren: () => import("./files/players/pages/kidel/kidel.module").then(m => m.KidelModule)
            },
            {
                path: "silent",
                loadChildren: () => import("./files/players/pages/silent/silent.module").then(m => m.SilentModule)
            },
            {
                path: "burgerwcheese",
                loadChildren: () => import("./files/players/pages/burgerwcheese/burgerwcheese.module").then(m => m.BurgerwcheeseModule)
            },
            {
                path: "obscurity",
                loadChildren: () => import("./files/players/pages/obscurity/obscurity.module").then(m => m.ObscurityModule)
            },
            {
                path: "xikeon",
                loadChildren: () => import("./files/players/pages/xikeon/xikeon.module").then(m => m.XikeonModule)
            },
        ]
    },

    {
        path: "userscripts",
        children: [
            {
                path: "pendorian-elite-ui",
                loadChildren: () => import("./files/userscripts/pages/elite-ui/elite-ui.module").then(m => m.EliteUiModule)
            },
            {
                path: "pendoria-plus",
                loadChildren: () => import("./files/userscripts/pages/plus/plus.module").then(m => m.PlusModule)
            },
        ]
    },

    {
        path: "**",
        loadChildren: () => import("./files/pages/not-found/not-found.module").then(m => m.NotFoundModule)
    }

];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})

export class AppRoutingModule {}
