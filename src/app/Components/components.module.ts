import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { DynamicValueComponent } from './dynamic-value/dynamic-value.component';
@NgModule({
    declarations: [
        DynamicValueComponent
    ],
    imports: [IonicModule
    ],
    exports: [
        DynamicValueComponent
    ]
})
export class ComponentsModule { }
