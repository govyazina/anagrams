//Напиши метод isAnagrams(), который принимает два строчных аргумента
// и выводит true, если строки являются анаграммами, и false, если строки ими не являются.

function isAnagrams(str1, str2){
    if (str1.length !== str2.length) {
        return false
    }
    const arr1 = str1.split('').sort().map(el => el.toLowerCase())
    const arr2 = str2.split('').sort().map(el => el.toLowerCase())
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false
        }
    }
    return true

}

module.exports = isAnagrams