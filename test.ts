//基礎的なことを詰め込んでいる。
//自分用のメモ

let message: string = 'こんにちは';

let message1: string | null = 'こんにちは';
message1 = null; //nullも可能

let numbers1: number[] = [1,2,3];
let numbers2: Array<number> = [1,2,3];

let list: [number, string, number] = [
    1, 'hoge', 2
];

// -----------------

interface User {
    id: number
    name: string
    age?: number
};

let user: User = {
    id: 1,
    name: '山田太郎',
    age: 28
}

let users: User[] = [
    {
        id: 1,
        name: '山田太郎',
        age: 28
    },
    {
        id: 2,
        name: '田中一郎'
    }
]

// -----------------


function sum(num1: number, num2: number): string {
    const sum: number = num1 + num2;
    return`${num1}+${num2}は、${sum}です。`;
}

sum(3,5) // 8

// -----------------

class Calc {
    private readonly num1: number;
    private readonly num2: number;
    constructor(num1: number, num2: number) {
        this.num1 = num1;
        this.num2 = num2;
    }

    public sum(): string {
        const sum: number = this.num1 + this.num2;
        return `${this.num1}+${this.num2}は、${sum}です。`;
    }
}


const calc = new Calc(5,6);
calc.sum();

// -----------------

class Test {
    private _type: string;

    constructor(type: string) {
        this._type = type;
    }

    set type(type: string) {
        this._type = type;
    }

    get type(): string {
        return this._type;
    }
}

const test =  new Test('test');
test.type = 'test2';
test.type; // test2

// -----------------

enum Role {
    Admin,
    Master,
    Editor,
    User
};

Role.Editor;

// -----------------

function genericsTest<T>(type: T) :T {
    return type;
}
genericsTest<string>('test');

function genericsTest2<T,K>(type: T, key:K) :string {
    return `${type} + ${key}`;
}
genericsTest2<string, number>('test', 100);


interface GenericsTest<T> {
    value: T
    title: string
}

const test1: GenericsTest<number> = {
    value: 100,
    title: 'ジェネリクステスト'
}

const test2: GenericsTest<string> = {
    value: '100',
    title: 'ジェネリクステスト'
}
// -----------------