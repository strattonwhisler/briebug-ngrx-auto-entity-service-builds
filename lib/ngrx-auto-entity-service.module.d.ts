import { ModuleWithProviders } from '@angular/core';
import { AutoEntityServiceConfig, DynamicAutoEntityServiceConfig } from './config';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export declare class NgrxAutoEntityServiceModule {
    static forRoot(config: DynamicAutoEntityServiceConfig, deps?: any[]): ModuleWithProviders<NgrxAutoEntityServiceModule>;
    static forRoot(config: AutoEntityServiceConfig): ModuleWithProviders<NgrxAutoEntityServiceModule>;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgrxAutoEntityServiceModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<NgrxAutoEntityServiceModule, never, [typeof i1.HttpClientModule], never>;
    static ɵinj: i0.ɵɵInjectorDeclaration<NgrxAutoEntityServiceModule>;
}
