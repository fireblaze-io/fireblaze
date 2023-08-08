import * as firebase from "firebase-admin";

export const id = "create-new-users";
export const description = "create new users";

export function up(admin: firebase.firestore.Firestore): void {
  throw new Error("Not implemented");
}

export function down(admin: firebase.firestore.Firestore): void {}
