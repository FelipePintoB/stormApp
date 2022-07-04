import { Injectable } from '@angular/core';
import {
  Firestore, collection, doc,
  setDoc, query, where, onSnapshot, deleteDoc
} from '@angular/fire/firestore';

import { Favorite } from "@core/interfaces/favorite";

import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  snapshotSubscription: any

  private favoriteArray: BehaviorSubject<Favorite[]> = new BehaviorSubject<Favorite[]>([]);

  constructor(private firestore: Firestore) { }

  async addDcoumentToCollection(user: string, city: string): Promise<void> {
    try {
      const id = this.generateDocId(user, city);
      const docRef = doc(this.firestore, "Favorites",id);
      const docData = {user, city}
      await setDoc(docRef,docData);
    } catch (error) {}
  }

  private generateDocId(user: string, city: string): string {
    const data1 = user.split("@");
    const data2 = city.replace(" ","");
    return `${data1[0]}${data2}`;
  }

  getDataCollection(user: string): void {
    try {
      const collectionRef = collection(this.firestore, "Favorites");
      const q = query(collectionRef, where("user","==",user));
      this.snapshotSubscription = onSnapshot(q, (querySnapshot) => {
        const info: Favorite[] = [];
        querySnapshot.forEach((doc) => {
          const data: Favorite = {
            id: doc.id,
            user: doc.data()["user"],
            city: doc.data()["city"]
          }
          info.push(data);
        });
        this.favoriteArray.next(info);
      });
    } catch (error) {

    }
  }

  getFavoriteArray(): BehaviorSubject<Favorite[]> {
    return this.favoriteArray;
  }

  deleteDoc(id: string) {
    const docRef = doc(this.firestore, "Favorites",id);
    deleteDoc(docRef);
  }

}
