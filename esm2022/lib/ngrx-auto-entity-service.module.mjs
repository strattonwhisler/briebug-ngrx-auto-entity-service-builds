import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { _provideAutoEntityService } from './ngrx-auto-entity-service.provider';
import * as i0 from "@angular/core";
export class NgrxAutoEntityServiceModule {
    static forRoot(config, deps) {
        return {
            ngModule: NgrxAutoEntityServiceModule,
            providers: [..._provideAutoEntityService(config, deps)],
        };
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: NgrxAutoEntityServiceModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    /** @nocollapse */ static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.3.2", ngImport: i0, type: NgrxAutoEntityServiceModule, imports: [HttpClientModule] }); }
    /** @nocollapse */ static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: NgrxAutoEntityServiceModule, imports: [HttpClientModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: NgrxAutoEntityServiceModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [HttpClientModule]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdyeC1hdXRvLWVudGl0eS1zZXJ2aWNlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25ncngtYXV0by1lbnRpdHktc2VydmljZS9zcmMvbGliL25ncngtYXV0by1lbnRpdHktc2VydmljZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFeEQsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0scUNBQXFDLENBQUM7O0FBS2hGLE1BQU0sT0FBTywyQkFBMkI7SUFHdEMsTUFBTSxDQUFDLE9BQU8sQ0FDWixNQUFnRSxFQUNoRSxJQUFZO1FBRVosT0FBTztZQUNMLFFBQVEsRUFBRSwyQkFBMkI7WUFDckMsU0FBUyxFQUFFLENBQUMsR0FBRyx5QkFBeUIsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDeEQsQ0FBQztJQUNKLENBQUM7aUlBWFUsMkJBQTJCO2tJQUEzQiwyQkFBMkIsWUFGNUIsZ0JBQWdCO2tJQUVmLDJCQUEyQixZQUY1QixnQkFBZ0I7OzJGQUVmLDJCQUEyQjtrQkFIdkMsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztpQkFDNUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEF1dG9FbnRpdHlTZXJ2aWNlQ29uZmlnLCBEeW5hbWljQXV0b0VudGl0eVNlcnZpY2VDb25maWcgfSBmcm9tICcuL2NvbmZpZyc7XG5pbXBvcnQgeyBfcHJvdmlkZUF1dG9FbnRpdHlTZXJ2aWNlIH0gZnJvbSAnLi9uZ3J4LWF1dG8tZW50aXR5LXNlcnZpY2UucHJvdmlkZXInO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbSHR0cENsaWVudE1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgTmdyeEF1dG9FbnRpdHlTZXJ2aWNlTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoY29uZmlnOiBEeW5hbWljQXV0b0VudGl0eVNlcnZpY2VDb25maWcsIGRlcHM/OiBhbnlbXSk6IE1vZHVsZVdpdGhQcm92aWRlcnM8TmdyeEF1dG9FbnRpdHlTZXJ2aWNlTW9kdWxlPjtcbiAgc3RhdGljIGZvclJvb3QoY29uZmlnOiBBdXRvRW50aXR5U2VydmljZUNvbmZpZyk6IE1vZHVsZVdpdGhQcm92aWRlcnM8TmdyeEF1dG9FbnRpdHlTZXJ2aWNlTW9kdWxlPjtcbiAgc3RhdGljIGZvclJvb3QoXG4gICAgY29uZmlnOiBBdXRvRW50aXR5U2VydmljZUNvbmZpZyB8IER5bmFtaWNBdXRvRW50aXR5U2VydmljZUNvbmZpZyxcbiAgICBkZXBzPzogYW55W10sXG4gICk6IE1vZHVsZVdpdGhQcm92aWRlcnM8TmdyeEF1dG9FbnRpdHlTZXJ2aWNlTW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBOZ3J4QXV0b0VudGl0eVNlcnZpY2VNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFsuLi5fcHJvdmlkZUF1dG9FbnRpdHlTZXJ2aWNlKGNvbmZpZywgZGVwcyldLFxuICAgIH07XG4gIH1cbn1cblxuIl19