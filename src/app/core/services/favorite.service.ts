import { Injectable } from '@angular/core';

import { FirestoreService } from "@core/services/firestore.service";

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  constructor(private firestoreService: FirestoreService) { }

  addFavoriteCity(user: string, city: string) {
    this.firestoreService.addDcoumentToCollection(user, city);
  }

  getAllFavorites(user: string) {
    this.firestoreService.getDataCollection(user);
    return this.firestoreService.getFavoriteArray();
  }

  removeFavoriteCity(id: string) {
    this.firestoreService.deleteDoc(id);
  }

}
