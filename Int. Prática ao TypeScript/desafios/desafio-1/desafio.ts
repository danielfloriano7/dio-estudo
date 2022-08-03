// 1
let employee = {
    code: 10,
    name: "John"
};

//2
let employee2: {code: number, name: string} =  {
    code: 10,
    name: "John"

};

//3
interface Funcionario {
    code: number,
    name: string

};

let employee3 = {} as Funcionario;
employee3.code = 13;
employee3.name = 'Daniel';

let employee4: Funcionario = {
    code: 12,
    name: "Lucas"
}