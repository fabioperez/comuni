import Fuse from 'fuse.js';
import comuniList from "./comuni.json";

var MAX_ELEMENTS = 25;

export default function filterEmoji(searchText, maxResults) {

    if (searchText.length <= 3) {
        return comuniList.slice(0, MAX_ELEMENTS);
    }

    var options = {
        shouldSort: true,
        tokenize: true,
        matchAllTokens: true,
        threshold: 0.5,
        location: 0,
        distance: 100,
        maxPatternLength: 32,
        minMatchCharLength: 5,
        keys: [
            "nome",
            "regione.nome",
            "provincia.nome"
        ]
    };
    var fuse = new Fuse(comuniList, options); // "list" is the item array
    var result = fuse.search(searchText);
    return result.slice(0, MAX_ELEMENTS);
}
