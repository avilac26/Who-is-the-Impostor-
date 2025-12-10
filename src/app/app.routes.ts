import { Routes } from '@angular/router';
import { StartCard } from './start-card/start-card';
import { SetGameCard } from './set-game-card/set-game-card';
import { SetPlayersCard } from './set-players-card/set-players-card';
import { SetImpostorsCard } from './set-impostors-card/set-impostors-card';
import { SetCategoryCard } from './set-category-card/set-category-card';
import { SetDurationCard } from './set-duration-card/set-duration-card';

export const routes: Routes = [
    {path: '', redirectTo: '/start-card', pathMatch: 'full'},
    {path: 'start-card', component: StartCard},
    {path: 'set-game-card', component: SetGameCard},
    {path: 'set-players-card', component: SetPlayersCard},
    {path: 'set-impostors-card', component: SetImpostorsCard},
    {path: 'set-category-card', component: SetCategoryCard},
    {path: 'set-duration-card', component: SetDurationCard}
];
