import { Routes } from '@angular/router';
import { StartCard } from './start-card/start-card';
import { SetGameCard } from './set-game-card/set-game-card';


export const routes: Routes = [
    {path: '', redirectTo: '/start-card', pathMatch: 'full'},
    {path: 'start-card', component: StartCard},
    {path: 'set-game-card', component: SetGameCard},
];
