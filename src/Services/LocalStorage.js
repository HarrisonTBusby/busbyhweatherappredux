function saveToLocalStorageByName(city) {
    let favorites = getLocalStorage();
    if(!favorites.includes(city)){
        favorites.push(city);
    }
    localStorage.setItem('Favorites', JSON.stringify(favorites));
}


function getLocalStorage() {

    let localStorageData = localStorage.getItem('Favorites');

    if (localStorageData === null) {
        return [];
    }

    return JSON.parse(localStorageData);

}


function removeFromLocalStorage(city) {
    let favorites = getLocalStorage();
    let nameIndex = favorites.indexOf(city);
    favorites.splice(nameIndex, 1);
    localStorage.setItem('Favorites', JSON.stringify(favorites));
}

export {saveToLocalStorageByName, getLocalStorage, removeFromLocalStorage};
