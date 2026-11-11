function dobro(x) {
  return x * 2;
}

const media = (lista) => {
  let soma = 0;
  for (const n of lista) {
    soma += n;
  }
  return soma / lista.length;
};

console.log(dobro(21));
console.log(media([8, 6.5, 9, 4]));
