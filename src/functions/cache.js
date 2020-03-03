// Caching is good for:
//    - Translations
//    - Shop items
//    - Location data
//
// Some special use case, that will be done: 
//     Store everything in cache, and when needed load values from cache, and update them instantly.

export function get(key) {
	  key = key.split('.').join('_')
	  if (localStorage[key]) {
		     return localStorage[key]
	  } else {
	  	   return 0; // So if something is not set, or its 0, return 0
	  }
}
export function store(key, value) {
    key = key.split('.').join('_');
    localStorage[key] = value;
    return 0;
}
