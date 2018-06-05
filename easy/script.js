let money,
	name,
	time,
	price;

function start() {
	money = prompt("Ваш бюджет на месяц?");

	while ((isNaN(money)) || money == "" || money == null) {
		money = prompt("Ваш бюджет на месяц?");
	}
	name = prompt("Название вашего магазина?", 'Foxbone');
	time = 21;
}

start();

mainList = {
	budget: money,
	shopName: name,
	shopGoods: [],
	employers: {},
	open: false,
	discount: true
}

function chooseGoods() {
for (let i = 0; i < 5; ) {

	let a = prompt("Какой тип товаров будем продавать?");
	
	if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50) {
		console.log('Все верно!');
		mainList.shopGoods[i] = a;
		i++;
	} else {
		alert("Введите правильное значение!");
	}
}
}
chooseGoods();

function workTime(time) {
if (time < 0) {
	console.log('Такого просто не может быть');
	} else if (time > 8 && time < 22) {
		console.log('Время работать!');
		} else if (time < 24) {
			console.log('Уже слишком поздно');
			} else {
				console.log('В сутках только 24 часа!');
				}
}

function calcBudget (money) {
	console.log(money/30)
}

function discountPrice (price) {
	mainList.discount?console.log(price*=0.8):console.log(price);
}

function employment () {
	let nameMan;
	for (let i = 0; i < 4; i++) {
		nameMan = prompt('Введите имя ' + (i+1) + 'сотрудника: ');
		if ((typeof(nameMan)) === 'string' && (typeof(nameMan)) != null && nameMan != '' && nameMan.length < 50) {
			mainList.employers[i] = (i+1) + ' - ' + nameMan;
			} else {
				i--;
			}
	}
}

workTime(18);
discountPrice(2000);
calcBudget(mainList.budget);
employment();
console.log(mainList.employers);
console.log(mainList);