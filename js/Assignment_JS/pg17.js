function replaceVowel(word) {
    let arrWord = word.split("")
    let newStr = ''
    for (let i = 0; i < arrWord.length; i++) {
        if (arrWord[i] === 'a')
            arrWord[i] = 1
        if (arrWord[i] === 'e')
            arrWord[i] = 2
        if (arrWord[i] === 'i')
            arrWord[i] = 3
        if (arrWord[i] === 'o')
            arrWord[i] = 4
        if (arrWord[i] === 'u')
            arrWord[i] = 5
        newStr += arrWord[i]
    }
    return newStr
}
var res=replaceVowel('sai')
console.log(res);
