import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { AppLayoutComponent } from "./layout/app.layout.component";
import { ActiveGuard } from './demo/guard/active.guard';
import { ReturnGuard } from './demo/guard/return.guard';

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: 'auth', canActivate:[ReturnGuard], loadChildren: () => import('./demo/components/auth/auth.module').then(m => m.AuthModule) },
            {
                path: '', canActivate:[ActiveGuard], component: AppLayoutComponent,
                children: [
                    { path: '', loadChildren: () => import('./demo/components/dashboard/dashboard.module').then(m => m.DashboardModule) },
                    { path: 'uikit', loadChildren: () => import('./demo/components/uikit/uikit.module').then(m => m.UIkitModule) },
                ]
            },
            { path: 'notfound', component: NotfoundComponent },
            { path: '**', redirectTo: '/notfound' },
        ],
        { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
