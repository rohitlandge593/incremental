import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetPlayerComponent } from './get-player/get-player.component';
import { AddplayerComponent } from './addplayer/addplayer.component';

const routes: Routes = [
  {path:'getplayers', component:GetPlayerComponent},
  {path:'addplayers', component:AddplayerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
