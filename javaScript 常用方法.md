## javaScript 常用方法

#### 使用给定的参数对句子执行一次查找和替换，然后返回新句子

```javascript
function myReplace(str, before, after) {
    if (before.charAt(0) >= 'A' && before.charAt(0) <= 'Z') {
        //将after的首字母变为大写
        after = after.replace(after.charAt(0), after.charAt(0).toUpperCase());
        str = str.replace(before, after);
    } else {
//将after的首字母变为小写
        after = after.replace(after.charAt(0), after.charAt(0).toLowerCase());
        str = str.replace(before, after);
    }
    return str;
}
console.log(myReplace("Let us get back to more Coding", "Coding", "algorithms"))
```



#### 重复输出字符串

```javascript
 function repeat(str, num) {
     if (num > 0) {
         var newstr = []
         for (let i = 0; i < num; i++) {
             newstr[i] = str
         }
         console.log(newstr.join(""));
     } else {
         console.log(" ");
     }
 }

 repeat("i love you ", 3);
```

#### 字符串超出隐藏

```javascript
function truncate(str, num) {
    let newstr = str.split("");

    if (newstr.length > num && num > 3) {
        console.log(newstr.slice(0, num - 3).join("") + '...');
    } else if (num <= 3) {
        console.log(newstr.slice(0, num).join("") + '...');
    } else if (newstr.length === num) {
        console.log(newstr.join(""));
    }

    // console.log(newstr.slice(0, num).join("") + '...')
    // return newstr1;
}

truncate("Walking on water and developing software from a specification", 36)

```

#### 把一个数组分成子数组为n的一个2维数组

```javascript
function chunk(arr, size) {
    var len = arr.length;
    var n = len / size;
    var arry = [];

    for (var i = 0; i < n; i++) {
        arry[i] = arr.slice(size * i, size * (i + 1))
    }
    // console.log(arr.slice(2, 4))
    console.log(arry)
}
chunk([0, 1, 2, 3, 4, 5], 3);
```

#### 如果数组第一个字符串元素包含了第二个字符串元素的所有字符，函数返回true。

```javascript
function mutation(arr) {
    let arry = [];
    let arr1 = arr[1].toLowerCase().split("")
    let arr0 = arr[0].toLowerCase()
    arr1.forEach((e, i) => {

        if (arr0.indexOf(e) >= 0) {
            arry[i] = true;
            console.log(e, true)
        } else {
            console.log(e, false)
            arry[i] = false;
        }
    });
    // return arr[0].toLowerCase()
    if (JSON.stringify(arry).indexOf('false') >= 0) {
        return false;
    } else {
        return true;
    }
    // return arr[1].toLowerCase().split("")

}

yy = mutation(["floor", "for"]);
```

#### 实现一个摧毁(destroyer)函数，第一个参数是待摧毁的数组，其余的参数是待摧毁的值

```javascript
function destroyer() {
	var argu = arguments
	var arr1 = argu[0];
	var arr2 = arr1.filter(function (val) {
		var a = true;
		for (var i = 1; i < argu.length; i++) {
			if (val === argu[i]) {
				a = false;
			}
		}
		return a;
	})
	return arr2
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
```

#### 先给数组排序，然后找到指定的值在数组的位置，最后返回位置对应的索引。

```javascript
function where(arr, num) {
    function compare(a, b) {
        return a - b;
    }
    arr.push(num);
    arr.sort(compare);
    return arr.indexOf(num);
}

console.log(where([2, 10, 20, 3], 5))
```

#### 下面我们来介绍风靡全球的凯撒密码Caesar cipher，又叫移位密码。移位密码也就是密码中的字母会按照指定的数量来做移位。

```javascript
// 普通方法
function rot13(str) { // LBH QVQ VG!
    var yy = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    var ystr = yy.join("").replace(",", "");
    let n = [];
    str.toUpperCase().split("").forEach(e => {
        if (e === "!" || e === '?' || e === " " || e === ".") n.push(e)
        n.push(ystr.indexOf(e))
    })
    let newstr = [];
    n.forEach((e, i) => {
        if (e === "!" || e === '?' || e === " " || e === ".") {
            newstr[i] = e;
        } else if (e >= 0) {
            newstr[i] = yy[e + 13];
            if (e + 13 > 25) {
                newstr[i] = yy[13 - (26 - e)]
            }
        }
    })
    return newstr.join("");
}

// charCodeAt() 方法可返回指定位置的字符的 Unicode 编码。这个返回值是 0 - 65535 之间的整数。
// (字符串中第一个字符的下标是 0。如果 index 是负数，或大于等于字符串的长度，则 charCodeAt() 返回 NaN。)
// fromCharCode() 可接受一个指定的Unicode 值，然后返回一个字符串。
// (该方法是 String 的静态方法，字符串中的每个字符都由单独的数字 Unicode 编码指定。
// 它不能作为您已创建的 String 对象的方法来使用。因此它的语法应该是 
// String.fromCharCode()，而不是 myStringObject.fromCharCode()。)

function rot13(str) { // LBH QVQ VG!
    var str1 = [];
    for (var i = 0; i < str.length; i++) {
        var num = str[i].charCodeAt();
        if (num >= 65 && num <= 77) {
            num += 13;
        } else if (num > 77 && num < 91) {
            num -= 13;
        }
        str1.push(String.fromCharCode(num));
    }
    return str1.join("");
}


console.log(rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK."))
```

####  求任意两数之间所有数之和

```javascript
function sumAll(arr) {
    var i = 0;
    let a = Math.max(...arr);
    let b = Math.min(...arr);

    for (; b < a + 1; b++) {
        i = i + b
    }
    console.log(i)
}

sumAll([56, 10]);
```

#### 数组去重

```javascript
function diff(arr1, arr2) {
  var newArr = [];

  newArr = Array.from(new Set([...arr1, ...arr2]));

  console.log(newArr);
}

diff(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);

```

#### 对象数组去重

```javascript
const lists = [{ id: 1, a: 1 }, { id: 2, a: 2 }, { id: 3, a: 3 }, { id: 4, a: 4 }, { id: 1, a: 1 }, { id: 2, a: 2 }, { id: 1, a: 1 }, { id: 2, a: 2 }, { id: 3, a: 3 }, { id: 4, a: 4 }, { id: 1, a: 1 }, { id: 2, a: 2 }];
const lists2 = [{ id: 1, a: 1 }, { id: 2, a: 2 }, { id: 3, a: 3 }, { id: 4, a: 4 }, { id: 1, a: 1 }, { id: 2, a: 2 }];

const result = lists.reduce((prev, cur) => {
  const ids = prev.map(item => item.id)
  return ids.includes(cur.id) ? prev : [...prev, cur]
}, []);
console.log(result)
```

#### 比较两个数组，然后返回一个新数组，该数组的元素为两个给定数组中所有独有的数组元素。换言之，返回两个数组的差异。

```javascript
function diff(arr1, arr2) {
  var newArr = [];
  var arr3 = [...arr1, ...arr2]
  // var arr3 = arr1.concat(arr2); //将arr1和arr2合并为arr3
  function isContain(a) {
    //找出arr3中不存在于arr1和arr2中的元素
    return arr1.indexOf(a) == -1 || arr2.indexOf(a) == -1;
  }
  newArr = arr3.filter(isContain);
  console.log(newArr);
}

diff(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"])

```

#### 将给定的数字转换成罗马数字。

```javascript
function convert(num) {
  var num0 = ["1", "4", "5", "9", "10", "40", "50", "90", "100", "400", "500", "900", "1000"];
  var num0R = num0.reverse();
  var num1 = ["I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M"];
  var num1R = num1.reverse();
  var numCon = [];
  num0R.forEach(function (value, index, arr) {
    while (num >= value) { //条件循环
      numCon.push(num1R[index]);
      num -= value;
    }
  });

  return numCon.join("");
}

console.log(convert(222));
```

#### 将给的的数字转换成中文

```javascript
function convert(num) {
  let changeNum = [ '零', '一','二','三','四','五','六', '七','八', '九' ];
  let unit = ['', '十', '百', '千', '万'];
  num = parseInt(num)
  let getWan = temp => {
    let strArr = temp
      .toString()
      .split('')
      .reverse()
    let newNum = ''
    for (var i = 0; i < strArr.length; i++) {
      newNum =
        (i == 0 && strArr[i] == 0
          ? ''
          : i > 0 && strArr[i] == 0 && strArr[i - 1] == 0
            ? ''
            : changeNum[strArr[i]] + (strArr[i] == 0 ? unit[0] : unit[i])) +
        newNum
    }
    return newNum
  }
  let overWan = Math.floor(num / 10000)
  let noWan = num % 10000
  if (noWan.toString().length < 4) {
    noWan = '0' + noWan
  }
  return overWan ? getWan(overWan) + '万' + getWan(noWan) : getWan(num)
}
```

#### 遍历一个对象数组（第一个参数）并返回一个包含相匹配的属性

``` javascript
function where(collection, source) {
  var arr = [];
  // What's in a name?
  var sourceArr = Object.keys(source);
  arr = collection.filter(function (obj) {
    for (var i = 0; i < sourceArr.length; i++) {
      if (obj[sourceArr[i]] !== source[sourceArr[i]]) {
        return false;
      }
    }
    return true;
  });
  console.log(arr);
}

where([{
  first: "Romeo",
  last: "Montague"
}, {
  first: "Mercutio",
  last: null
}, {
  first: "Tybalt",
  last: "Capulet"
}], {
  last: "Capulet"
});
```

#### 给定一个字符串返回对象数组中包含该字符串的对象

```javascript
let str = 'MOTI';
let data = [
    { technology: 'CHARACTER', score: -1, text: 'sfoefjlasdoejfoausfe' },
    { technology: 'PRESSURE_RELIEF', score: 2, text: '123qw' },
    { technology: 'SUPPORT', score: 3, text: '123qw' },
    { technology: 'MOTION_ISOLATION', score: 2, text: '123qw' },
    { technology: 'TEMPERATURE_MANAGEMENT', score: -1, text: '123qw' },
    { technology: 'COMFORT', score: 2, text: 'szyy' }
];
let result = data.filter(function (el) {
    return el.technology.indexOf(str) > -1 || el.text.indexOf(str) > -1;
});

console.log(result);
```



```javascript
function confirmEnding(str, target) {
    var n = target.split("").length;
    var newstr = str.split(" ").join("");
    if (newstr.substr(-n) === target) {
        console.log(newstr.substr(-n));
        // return true;
    } else {
        //return false;
        console.log(newstr.substr(-n));
    }
}

confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification");

```

