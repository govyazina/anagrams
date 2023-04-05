//Напиши метод isAnagrams(), который принимает два строчных аргумента
// и выводит true, если строки являются анаграммами, и false, если строки ими не являются.

function isAnagrams(str1, str2) {
    str1 = str1.replace(/\W/g, '')
    str2 = str2.replace(/\W/g, '')
    console.log(str1)
    if (str1.length !== str2.length) {
        return false
    }
    const arr1 = str1.toLowerCase().split('').sort()
    const arr2 = str2.toLowerCase().split('').sort()
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false
        }
    }
    return true

}

module.exports = isAnagrams