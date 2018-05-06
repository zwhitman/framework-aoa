import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StoreModule } from '@ngrx/store';
import { reducer } from './reducers/reducer';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { SubCompComponent } from './sub-comp/sub-comp.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'main', component: HelloWorldComponent },
  { path: 'sub', component: SubCompComponent },
  { path: '**',
   redirectTo: '',
   pathMatch: 'full'
 },
];

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    SubCompComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    StoreModule.forRoot({ count: reducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
