// Imports
// Deprecated import
// import { provideRouter, RouterConfig } from '@angular/router';
// import { ModuleWithProviders }  from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from './components/HomeComponent';
import { NeoStepComponent } from './components/NeoStep.component'
import { StepsResolver } from './resolvers/StepsResolver'

// Route Configuration
export const ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'step/:number', component: NeoStepComponent, resolve:{
    step: StepsResolver
  }},
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

// Deprecated provide
// export const APP_ROUTER_PROVIDERS = [
//   provideRouter(routes)
// ];
