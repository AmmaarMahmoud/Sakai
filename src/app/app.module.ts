import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './layout/app.layout.module';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { IconService } from './demo/service/icon.service';
import { NgxSpinnerModule } from "ngx-spinner";
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { SppenarInterceptor } from './demo/interceptors/sppenar.interceptor';
import { LoadedInterceptor } from './demo/interceptors/loaded.interceptor';
@NgModule({
    declarations: [
        AppComponent,
        NotfoundComponent
    ],
    imports: [
        AppRoutingModule,
        AppLayoutModule,
        NgxSpinnerModule.forRoot({ type: 'square-jelly-box' })
    ],
    providers: [
        { 
            provide: LocationStrategy,
            useClass: HashLocationStrategy 
        },
        {
            provide:HTTP_INTERCEPTORS,
            useClass:LoadedInterceptor,
            multi:true
        },
        {
            provide:HTTP_INTERCEPTORS,
            useClass:SppenarInterceptor,
            multi:true
        },
          IconService, 
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
