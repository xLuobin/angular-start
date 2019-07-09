import { NgModule } from '@angular/core';
import { DetailComponent } from './detail/detail.component';
import { ListComponent } from './list/list.component';
import { WindowProperRoutingModule } from './window-property.routing.module';

@NgModule({
    declarations: [
        DetailComponent,
        ListComponent
    ],
    imports: [
        WindowProperRoutingModule
    ],
    providers: []
})
export class WindowPropertyModule { }
