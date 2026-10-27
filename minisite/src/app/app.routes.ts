import { Routes } from '@angular/router';
import { Accueil } from './pages/accueil/accueil';
import { Produits } from './pages/produits/produits';
import { ProduitDetail } from './pages/produit-detail/produit-detail';
import { Apropos } from './pages/apropos/apropos';
import { NotFound } from './pages/not-found/not-found';

export const routes: Routes = [
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: '', component: Accueil },
  {
    path: 'produits',
    component: Produits,
    children: [
      { path: 'liste', component: Produits },
    ]
  },
  { path: 'produits/:id', component: ProduitDetail },
  { path: 'apropos', component: Apropos },
  { path: '**', component: NotFound }
];
