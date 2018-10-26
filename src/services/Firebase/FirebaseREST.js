import {FirebaseDB} from './Firebase'

export default class FirebaseREST {

  static get(nodePath, callback) {
    const ref = FirebaseDB.ref(nodePath);
    return ref.on('value', (snap) => { callback(snap.val()); } );
  }

  static post(nodePath, obj) {
    const ref = FirebaseDB.ref(nodePath);
    ref.push(obj);
    return ref.key;
  }
    
  static update(nodePath, obj) {
    const objWithoutID = {...obj};
    delete objWithoutID.id;  
    const ref = FirebaseDB.ref(nodePath + '/' + obj.id);
    ref.set(objWithoutID);
    return obj.id;
  }
 
  static delete(nodePath, obj) {
    const ref = FirebaseDB.ref(nodePath + obj.id);
    return ref.remove();
  }
};