import { NgModule } from "@angular/core";
import { ListComponent } from "./list/list.component";
import { HeroComponent } from "./hero/hero.component";
import { CommonModule } from "@angular/common";

@NgModule({
    exports:[
        ListComponent,
        HeroComponent
    ],
    declarations: [
        ListComponent,
        HeroComponent
    ],
    imports: [
        CommonModule
    ]
})
export class HeroesModule{}