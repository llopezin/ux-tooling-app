import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppRoutingModule } from './app-routing.module';
import { UserModule } from './user/user.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';

import { environment } from 'src/environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { UsersEffects } from './shared/store/user-store/user.effects';
import { DashboardModule } from './dashboard/dashboard.module';
import { appReducers } from './app.reducers';
import {WorkspaceEffects} from './shared/store/workspace-store/workspace.effects';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule, 
    DashboardModule,
    HttpClientModule, 
    StoreModule.forRoot(appReducers, {
      runtimeChecks: {
        strictStateImmutability: false,
        strictActionImmutability: false,
      },
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    EffectsModule.forRoot([UsersEffects, WorkspaceEffects]), 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
