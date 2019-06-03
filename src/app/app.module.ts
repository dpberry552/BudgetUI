import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatFormField,
  MatFormFieldModule,
  MatOptionModule,
  MatSelectModule,
  MatInputModule
} from '@angular/material';
import { LoginComponent } from './components/login/login.component';
import { AppConfigService } from './services/app-config.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { AccountComponent } from './components/account/account.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'accountSummary',
    component: AccountComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AccountComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatInputModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatInputModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      multi: true,
      deps: [AppConfigService],
      useFactory: (appConfigService: AppConfigService) => {
        return () => {
          //Make sure to return a promise!
          return appConfigService.loadAppConfig();
        };
      }
    },
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
