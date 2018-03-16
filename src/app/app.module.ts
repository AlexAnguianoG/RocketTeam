import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

const appRoutes: Routes = [
  /*{ path: 'foo', component: FooComponent },
  { path: '', redirectTo: '/foo', pathMatch: 'full' },*/
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
    declarations: [
	AppComponent,
	PageNotFoundComponent
    ],
    imports: [
	BrowserModule,
	RouterModule.forRoot(appRoutes,{ enableTracing: true } ),
	BrowserAnimationsModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
