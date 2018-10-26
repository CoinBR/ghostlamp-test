import {firebaseDB} from './firebase'

export default class FirebaseREST {

  static get(nodePath, callback) {
    const ref = firebaseDB.ref(nodePath);
    return ref.on('value', (snap) => { callback(snap.val()); } );
  }

  static post(nodePath, obj) {
    const ref = firebaseDB.ref(nodePath);
    ref.push(obj);
    return ref.key;
  }
    
  static update(nodePath, obj) {
    const objWithoutID = {...obj};
    delete objWithoutID.id;  
    const ref = firebaseDB.ref(nodePath + '/' + obj.id);
    ref.set(objWithoutID);
    return obj.id;
  }
};