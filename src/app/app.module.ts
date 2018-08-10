import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ThanksComponent } from './thanks/thanks.component';


const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'thanks', component: ThanksComponent },

 { path: '**',
    redirectTo: '/home',
  },
];



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    ThanksComponent,
  ],
  imports: [    RouterModule.forRoot(
    appRoutes
  ),
    BrowserModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatMenuModule,
    BrowserAnimationsModule
  ],
  entryComponents : [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
