import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produits',
  imports: [],
  templateUrl: './produits.html',
  styleUrl: './produits.scss',
})
export class Produits {
  constructor(private router: Router) {}

  voirDetail(id: number) {
    this.router.navigate(['/produits', id]);
  }
}
