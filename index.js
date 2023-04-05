//Напиши метод isAnagrams(), который принимает два строчных аргумента
// и выводит true, если строки являются анаграммами, и false, если строки ими не являются.

function isAnagrams(str1, str2){
    if (str1.length !== str2.length) {
        str1 = str1.replaceAll(' ', '')
        str2 = str2.replaceAll(' ', '')
        if (str1.length !== str2.length) {
            return false
        }
    }
    const arr1 = str1.split('').map(el => el.toLowerCase()).sort()
    const arr2 = str2.split('').map(el => el.toLowerCase()).sort()
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false
        }
    }
    return true

}

module.exports = isAnagrams