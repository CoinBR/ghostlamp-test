import {firebaseDatabase} from '../utils/firebaseUtils'

export default class FirebaseService {

    static get(nodePath, callback) {
        const endpoint = firebaseDatabase.ref(nodePath);
        return endpoint.on('value', (snap) => { callback(snap.val()); } );
    }
};