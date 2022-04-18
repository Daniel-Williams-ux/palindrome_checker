/*
 Write a function palindrome that takes a string as an argument
 declare a variable reg and assign it regex that removes all non-alphanumeric characters
 declare a variable newStr that converts to lowercase
 declare a variable reversed that split, reverse and joins the string
 return true if reversed string equals newStr return true
 otherwise return false
 */

function palindrome(str) {
	let reg = /[\W_]/g;
	let newStr = str.toLowerCase().replace(reg, "")
	let reversed =newStr.split("").reverse().join("")
	console.log(reversed)
	if (reversed === newStr) return true
	return false
}
palindrome("eye");
