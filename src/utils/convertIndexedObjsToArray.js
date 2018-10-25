/*
  Firebase and some apis, usually return a list of objects, indexed by its ids, like this:
    {
     "-LPfEAtAjvuwQDJFwnhH":{
        "description":"Yellows Guyz",
        "isFavorite":true,
        "isFinished":false,
        "name":"The Simpsons"
     },
     "-LPfO5OMPL2yKI1jyPlW":{
        "description":"as boe",
        "isFavorite":true,
        "isFinished":false,
        "name":"Orphan Black"
     }
    }

  To make it easier to render, this function will convert the results to something like this:
    {
        "id": "-LPfEAtAjvuwQDJFwnhH"
        "description":"Yellows Guyz",
        "isFavorite":true,
        "isFinished":false,
        "name":"The Simpsons"
     },
        "id": "-LPfO5OMPL2yKI1jyPlW"
        "description":"as boe",
        "isFavorite":true,
        "isFinished":false,
        "name":"Orphan Black"
     }
    }
*/

const convertIndexedObjsToArray = (objs) => {
  return Object.keys(objs).map((id) => {
    const obj = objs[id];
    obj['id'] = id;
    return obj; 
  })
}

export default convertIndexedObjsToArray;