
function mesclarESemDuplicatas(array1, array2) {
  const arrayMesclado = array1.concat(array2);
  const arrayUnico = [...new Set(arrayMesclado)];
  return arrayUnico;
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];


const mescladoESemDuplicatas = mesclarESemDuplicatas(array1, array2);
console.log(mescladoESemDuplicatas); 

