// previous elemValue function
const elemValue1 = num => {
    const inner = character => {
        return idToText(character + num);
    }
    return inner;
}

// current elemValue function
const elemValue = num => character => idToText(character + num);