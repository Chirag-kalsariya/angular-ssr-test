import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeScreenComponent } from './components/home-screen/home-screen.component';
import { SubPageOneComponent } from './components/sub-page-one/sub-page-one.component';
import { SubPageTwoComponent } from './components/sub-page-two/sub-page-two.component';
import { HomeScreenWrapperComponent } from './components/home-screen-wrapper/home-screen-wrapper.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeScreenWrapperComponent,
    HomeScreenComponent,
    SubPageOneComponent,
    SubPageTwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent],
  providers: [provideClientHydration()]
})
export class AppModule { }
