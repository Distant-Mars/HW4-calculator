/*-----------------底层函数，在主函数里面使用-------------------*/



/*-----------------输出表达式------------------*/
function cout() {
		document.getElementById("print").value = str;
}

/*-----------------将输入的按钮转换为字符串准备输出-------------------*/
function to_str() {
	str = '';
	for (var i = 0; i < arr.length; i++) {
		str = str + arr[i];
	}
}

/*-----------------点击按钮后的样式变化-------------------*/
function buttonDown(temp) {
	for (var i = 0; i < 5; i++)
		for (var j = 0; j < 4; j++) {
			if (button[i][j] == temp) {
				var _button = document.getElementById('grid-cell-'+i+'-'+j);
				_button.style.boxShadow = "none";
				_button.style.mozBoxShadow = "none";
				_button.style.webkitBoxShadow = "none";
				_button.style.top = 65+75*i+3+"px";
				_button.style.left = 10+80*j+3+"px";
			}
		}
}