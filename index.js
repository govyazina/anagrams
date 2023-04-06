//Напиши метод isAnagrams(), который принимает два строчных аргумента
// и выводит true, если строки являются анаграммами, и false, если строки ими не являются.

function isAnagrams(str1, str2) {
    str1 = str1.replace(/\W/g, '')
    str2 = str2.replace(/\W/g, '')
    if (str1.length !== str2.length) {
        return false
    }
    const strSorted1 = str1.toLowerCase().split('').sort().join('')
    const strSorted2 = str2.toLowerCase().split('').sort().join('')
    return strSorted1 === strSorted2

}


module.exports = isAnagrams