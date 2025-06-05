## 03 - Middlewares

#### Conceitos de programação funcional

- Currying

Uma fn curried permite que seja passado um argumento por vez para determinada função
Exemplo:

```js
// Função default
function sum(a, b, c) {
  return a + b + c;
}

// Função curried
function sumCurried(a) {
  return (b) => {
    return (c) => {
      return a + b + c;
    };
  };
}

// ou
const sumCurriedAF = a => b => c => a + b + c;

// Ativando funções
console.log(sumCurried(2)(5)(10));
console.log(sumCurriedAF(1)(2)(10));
```
