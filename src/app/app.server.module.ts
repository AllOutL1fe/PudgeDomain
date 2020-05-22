import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';

import { AppComponentShop } from './app.component';
import { AppModuleShop } from './app.module';

@NgModule({
    imports: [AppModuleShop, ServerModule, ModuleMapLoaderModule],
  bootstrap: [AppComponentShop]
})
export class AppServerModule { }
