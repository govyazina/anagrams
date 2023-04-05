//Напиши метод isAnagrams(), который принимает два строчных аргумента
// и выводит true, если строки являются анаграммами, и false, если строки ими не являются.

function isAnagrams(str1, str2){
    if (str1.length !== str2.length) {
        return false
    }
    return true

}

module.exports = isAnagrams