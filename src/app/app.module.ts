import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { ViewsComponent } from './views/views.component';
import { SignupComponent } from './signup/signup.component';

const appRoutes: Routes = [
    { path: 'subjects', component: SubjectsComponent },
    { path: 'views', component: ViewsComponent },
    { path: 'signup', component: SignupComponent },
    { path: '', component: HomeComponent },
    { path: '**', component: PageNotFoundComponent }
];


@NgModule({
    declarations: [
	AppComponent,
	PageNotFoundComponent,
	HomeComponent,
	SubjectsComponent,
	ViewsComponent,
	SignupComponent
    ],
    imports: [
	BrowserModule,
	RouterModule.forRoot(appRoutes,{ enableTracing: true } ),
	BrowserAnimationsModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
