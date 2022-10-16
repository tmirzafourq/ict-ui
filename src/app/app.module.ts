import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BodyComponent } from './layout/body/body.component';
import { SidenavComponent } from './layout/sidenav/sidenav.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SublevelMenuComponent } from './layout/sidenav/sublevel-menu.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { SystemComponent } from './pages/system/system.component';
import { CardModule } from 'primeng/card';
import { CreateComponent } from './pages/create/create.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    SidenavComponent,
    DashboardComponent,
    SublevelMenuComponent,
    NavbarComponent,
    SystemComponent,
    CreateComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    CardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
