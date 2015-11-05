var arr = new Array(); // 保存点击的按钮的值
var str = ''; // 将输入的值转换成字符串，用于显示
var button = new Array(); // 存储每个按钮的值，方便找到对应的按钮


/*-----------------页面初始化-------------------*/
window.onload = function() { 
	init();
}

/*-----------------定位元素，设置按钮颜色-------------------*/
function init() {

	for (var i = 0; i < 5; i++) {
		button[i] = new Array();
		for (var j = 0; j < 4; j++) {
			var temp = document.getElementById('grid-cell-'+i+'-'+j);
			temp.style.backgroundColor = "rgb(255, 255, 255)";
			if (j == 3 || (i == 3 && j == 2) || (i == 4)) {
				temp.style.backgroundColor = "rgb(255, 240, 245)";
			}
			if (i == 4 && j == 2) {
				temp.style.backgroundColor = "rgb(234, 185, 181)";
			}
			if (i == 4 && j == 3) {
				temp.style.backgroundColor = "rgb(249, 255, 154)";
			}
			temp.style.top = 65+75*i+"px";
			temp.style.left = 10+80*j+"px";
			button[i][j] = temp.innerHTML;
		}
	}
}


/*-----------------点击按钮后的函数-------------------*/
function cal(temp) {

	/*-----------------点击后改变一次样式，延迟0.2秒再恢复原来的样式，达到点击按钮的效果-------------------*/
	buttonDown(temp);
	setTimeout(function() {
		for (var i = 0; i < 5; i++)
			for (var j = 0; j < 4; j++) {
				if (button[i][j] == temp) {
					var _button = document.getElementById('grid-cell-'+i+'-'+j);
					_button.style.boxShadow = "3px 3px 3px -2px";
					_button.style.mozBoxShadow = "3px 3px 3px -2px";
					_button.style.webkitBoxShadow = "3px 3px 3px -2px";
					_button.style.top = 65+75*i+"px";
					_button.style.left = 10+80*j+"px";
				}
			}
		}, 200);


	/*-----------------针对一些特殊按钮的分别操作-------------------*/
	if (temp == 'CE') {
		arr.length = 0;
		to_str();
		cout();
	}
	else if (temp == '←') {
		arr.pop();
		to_str();
		cout();
	}
	else if (temp == '=') {
		to_str();
		try  {
     		var sum = eval(str);
     		document.getElementById("print").value = sum;
     		arr.length = 1;
     		arr[arr.length-1] = sum;
     	}
		catch(exception) {
     	alert("输入错误！");
     	}

	}
	else {
		arr.push(temp);
		to_str();
		cout();
	}
}