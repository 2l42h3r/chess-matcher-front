import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AwaitingComponent } from "./awaiting.component";

const routes: Routes = [
    {
        path: '',
        component: AwaitingComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AwaitingRoutingModule {}