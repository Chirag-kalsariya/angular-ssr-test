import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeScreenComponent } from './components/home-screen/home-screen.component';
import { SubPageTwoComponent } from './components/sub-page-two/sub-page-two.component';
import { SubPageOneComponent } from './components/sub-page-one/sub-page-one.component';
import { HomeScreenWrapperComponent } from './components/home-screen-wrapper/home-screen-wrapper.component';

const routes: Routes = [
  { path: 'sub-page-1', component: SubPageOneComponent },
  { path: 'sub-page-2', component: SubPageTwoComponent },
  { path: '**', component: HomeScreenComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
