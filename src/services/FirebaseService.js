import {firebaseDatabase} from '../utils/firebaseUtils'

export default class FirebaseService {

  static get(nodePath, callback) {
    const ref = firebaseDatabase.ref(nodePath);
    return ref.on('value', (snap) => { callback(snap.val()); } );
  }

  static post(nodePath, obj) {
    const ref = firebaseDatabase.ref(nodePath);
    ref.push(obj);
    return ref.key;
  }
    
  static update(nodePath, obj) {
    const objWithoutID = {...obj};
    delete objWithoutID.id;  
    const ref = firebaseDatabase.ref(nodePath + '/' + obj.id);
    ref.set(objWithoutID);
    return obj.id;
  }
};