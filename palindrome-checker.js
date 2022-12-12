function palindrome(str) {
    //turn everything to lowercase
    str = str.toLowerCase();
    //replace all alphanumeric characters
    str = str.replace(/[^a-z0-9]/g, '');

    // reverse the string(str)
    let back = str.split('');
    back = back.reverse().join('').toString();

    if (back === str) {
        return true;
    } else {
        return false;
    }
}

console.log(palindrome("eye"));
console.log(palindrome("_eye"));
console.log(palindrome("race car"));
console.log(palindrome("not a palindrome"));
console.log(palindrome("A man, a plan, a canal. Panama"));
console.log(palindrome("never odd or even"));
console.log(palindrome("My age is 0, 0 si ega ym."));
console.log(palindrome("1 eye for of 1 eye."));
console.log(palindrome("0_0 (: /-\ :) 0-0"));
console.log(palindrome("five|\_/|six"));