"use strict";
//基礎的なことを詰め込んでいる。
//自分用のメモ
var message = 'こんにちは';
var message1 = 'こんにちは';
message1 = null; //nullも可能
var numbers1 = [1, 2, 3];
var numbers2 = [1, 2, 3];
var list = [
    1, 'hoge', 2
];
;
var user = {
    id: 1,
    name: '山田太郎',
    age: 28
};
var users = [
    {
        id: 1,
        name: '山田太郎',
        age: 28
    },
    {
        id: 2,
        name: '田中一郎'
    }
];
// -----------------
function sum(num1, num2) {
    var sum = num1 + num2;
    return num1 + "+" + num2 + "\u306F\u3001" + sum + "\u3067\u3059\u3002";
}
sum(3, 5); // 8
// -----------------
var Calc = /** @class */ (function () {
    function Calc(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }
    Calc.prototype.sum = function () {
        var sum = this.num1 + this.num2;
        return this.num1 + "+" + this.num2 + "\u306F\u3001" + sum + "\u3067\u3059\u3002";
    };
    return Calc;
}());
var calc = new Calc(5, 6);
calc.sum();
// -----------------
var Test = /** @class */ (function () {
    function Test(type) {
        this._type = type;
    }
    Object.defineProperty(Test.prototype, "type", {
        get: function () {
            return this._type;
        },
        set: function (type) {
            this._type = type;
        },
        enumerable: false,
        configurable: true
    });
    return Test;
}());
var test = new Test('test');
test.type = 'test2';
test.type; // test2
// -----------------
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["Master"] = 1] = "Master";
    Role[Role["Editor"] = 2] = "Editor";
    Role[Role["User"] = 3] = "User";
})(Role || (Role = {}));
;
Role.Editor;
// -----------------
function genericsTest(type) {
    return type;
}
genericsTest('test');
function genericsTest2(type, key) {
    return type + " + " + key;
}
genericsTest2('test', 100);
var test1 = {
    value: 100,
    title: 'ジェネリクステスト'
};
var test2 = {
    value: '100',
    title: 'ジェネリクステスト'
};
// -----------------
