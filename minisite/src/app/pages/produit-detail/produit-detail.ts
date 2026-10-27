import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produit-detail',
  standalone: true,
  templateUrl: './produit-detail.html',
  styleUrl: './produit-detail.scss'
})
export class ProduitDetail {
  productId!: string;

  constructor(private route: ActivatedRoute) {
    this.productId = this.route.snapshot.params['id'];
  }
}
