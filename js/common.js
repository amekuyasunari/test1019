console.log("jsファイルからHello World");

//twitterのボタン
function twitText() {
	var s, url;
	s = "ああああああ%23SUNABACO %23すなぷろ11th";
	url = document.location.href;
	
	if (s != "") {
		if (s.length > 140) {
			//文字数制限
			alert("テキストが140字を超えています");
		} else {
			//投稿画面を開く
			url = "http://twitter.com/share?url=" + escape(url) + "&text=" + s;
			window.open(url,"_blank","width=600,height=300");
		}
	}
}

console.log("yasu" + "nari");
console.log("SUNABACO".split("A"));

var students = "yasunari,";
console.log(students);

students = "いとむらさん"
console.log(students);

students = ["メッシ","ロナウド","大迫"]
console.log(students[2]);

students[0] = "南野"
console.log(students[0]);

var sunabaco = {"沖縄":"KOZA","北海道":"EBETU","高松":"TAKAMATSU"}
console.log(sunabaco);
console.log(sunabaco["北海道"]);

var count = 1
console.log(count);

count += 1; //count = count + 1 ;
count -= 2

console.log(1<2);

//比較演算子

var x = 2
var y = 3

console.log(x==y);   //xとyは等しい「かどうか」
console.log(x===y);  //xとyは等しい「かどうか」（厳密等価演算）
console.log(x<y);    //xよりが大きい
console.log(x<=y);   //xよりが大きいまたは等しい「かどうか」
console.log(x>y);    //xよりyが小さい「かどうか」
console.log(x>=y);   //xよりyが小さいまたは等しい「かどうか」
console.log(x!=y);   //xとyは等しくない「かどうか」

//条件文の練習
var licence_flag = 0;
var now = 14



if (licence_flag == 1) {
	console.log("車を運転できました"); 
} else if (now < 22) {
	console.log("電車で帰れます");
} else {
	console.log("車を運転できませんでした");
}


var limit = 10;
var getup = 10;

if (limit < getup) {
	console.log("遅刻です");

} else if (limit == getup) {
	console.log("ギリギリセーフ！");

}else {
	console.log("よくがんばりました");
}


//繰り返し文
var number = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
console.log(number);

for(var i=1; i<=20; i++) {
	console.log(i);
}

for (var i=0; i<=25; i++) {
	console.log(i + "番目");
}

// 変数 = データが入ってる箱
// 関数 = 命令文がまとめて入ってる箱

function greet(user_name) {
	var message = user_name + "さん、こんにちは"
	console.log(message);
}
greet("いとむらさん");

