let str = 'урок-3-был слишком легким';
console.log(str);

//1
let str2 = '';
str2 = str[0].toUpperCase() + str.slice(1);
console.log(str2);

//2
let str3='';
for (let i = 0; i < str2.length; ++i) {
	if (str2.charAt(i) == '-'){
		str3 += ' ';
	}
	else {
		str3 += str2.charAt(i);
	}
}
console.log(str3);

//3
let str4 = '', str5 = 'легким';
let pos = str3.indexOf(str5);
str3 = str3.slice(0, pos - 2);
str3 += 'о';
console.log(str3);



//4
arr = [20, 33, 1, 'Человек', 2, 3];
let sum = 0;
for (let i = 0; i < arr.length; ++i) {
	if (!isNaN(arr[i])){
		sum += Math.pow(arr[i], 3);
	}
}
console.log(Math.sqrt(sum));

//5
function deleteSpace (string) {
	let string2 = '';
	while ((typeof(string)) != 'string' || (typeof(string)) === null || string == '') {
		string = prompt('Введите строку: ');
	}
		for (let i = 0; i < string.length; ++i){
			if (string.charAt(i) != ' ') {
				string2 += string.charAt(i);
			}
		}
				
		if (string2.length <= 50) {
			console.log(string2);
			}
		else {
			string2 = string2.slice(0, 50);
			string2 += '...';
		} 
	console.log(string);		
	console.log(string2);
	alert(string2);
}
	deleteSpace(prompt('Введите строку: '));