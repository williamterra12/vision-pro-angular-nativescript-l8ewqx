import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from '@nativescript/angular';
import { VRBallComponent } from './vr-ball/vr-ball.component';

const routes: Routes = [
  { path: '', redirectTo: '/vr-ball', pathMatch: 'full' },
  { path: 'vr-ball', component: VRBallComponent },
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}