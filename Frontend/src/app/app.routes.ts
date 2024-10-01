import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { MonstrosComponent } from './views/monstros/monstros.component';
import { PersonagensComponent } from './views/personagens/personagens.component';

export const routes: Routes = [
    {path:'', component:HomeComponent},
    {path:'monstros', component:MonstrosComponent},
    {path:'personagens', component:PersonagensComponent}
];
