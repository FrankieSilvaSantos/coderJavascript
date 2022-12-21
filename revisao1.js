//destructuring

const [a,b,c,d,e] = 'cod3r';

console.log(a,b,c,d,e);

const [x,y,w,...z] = 'cod3r';

console.log(x,y,w,z);


const {nome,idade} = {nome:'Joshua',idade: 21};

console.log(nome,idade);