// задание 1
var months = [
	'янв', 'фев', 'мар', 'апр', 'май', 'июн',
	'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'
];

var date = new Date();
var month = date.getMonth();
alert(months[month]);

//задание 2
function buttonClick() {
	var input1 = document.getElementById('input1');
	var input2 = document.getElementById('input2');
	var input1Value = input1.value;
	var input2Value = input2.value;
	input1.value = input2Value;
	input2.value = input1Value;
}