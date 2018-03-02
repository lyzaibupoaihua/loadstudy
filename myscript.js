 	
	//以下为我学习JavaScript时所遇的问题或感觉有必要记录的知识点


	//ES6 部分	主要包括新内容以后也能是es7、es8···
	function* fibs(){
		let a = 0;
		let b = 1;
		while(true){
			yield a; //yield 作用与return相仿，用来返回 a 的值
			[a, b] = [b, a + b];//解构式赋值，两者视为同时执行
			//故关于b 的赋值不会因a 的改变而变化
			//let a = 0
			// a = b = 1; b = a + b = 1
			//let a = 1
			// a = b = 1; b = a + b =2 
			//let a = 1; 
			//a = b =2; b= a + b =3
			//let a = 2;
			//a = b = 3; b = a + b =5
			//let a = 3; 
			//a = b = 5; b = a + b =8
			//let a = 5;
		}
	}
	//函数fibs是一个Generator函数，可用来动态赋值
	let [first, second, thrid, fourth, fifth, sixth] = fibs();
 	//解构用途：函数值的交换,该函数无法改变变量原本的值（鸡肋）
 	function xyyx(a,b){
 		return [a, b] = [b, a]
 	}
 	const asd = new Map();
 	asd.set('first','hello')//asd.delete('key')删除一个
 	asd.set('second','world')
 	for( let [key, value] of asd){//遍历Map结构，获取键名、键值
 		//[,value]  [key]
 		console.log(key +"是"+value)
 	}

 	//javascript 比较杂乱的部分


 	//JQuery


 	//vue.js


 	//node.js 