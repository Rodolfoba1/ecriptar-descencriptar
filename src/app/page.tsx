import { Caladea } from 'next/font/google';
import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const askQuestion = (question: string): Promise<string> => {
  return new Promise((resolve) => {
    rl.question(question, resolve);
  });
};

const askRowsAndColumns = (question: string): Promise<number> => {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      const num = parseInt(answer, 10);
      if (isNaN(num) || num <= 0) {
        console.log('Entrada no válida. Por favor, introduce un número entero positivo.');
        resolve(NaN);
      } else {
        resolve(num);
      }
    });
  });
};

/*************************************************************************************************
 **************************************************************************************************/
const encrypt = async (): Promise<void> => {
  let arrayForKeyValues: number[][] = [];
  let arrayForLetters: number[] = [];
  
  const input: string = await new Promise((resolve) => {
    rl.question('Introduce un nombre y un apellido: ', resolve);
  });

  // matriz ingresada a 3x3
  const filas = 3;
  const columnas = 3;

  function preguntarValor(i: number, j: number): Promise<void> {
    return new Promise((resolve) => {
      rl.question(`Ingrese el valor para la posición [${i}][${j}]: `, (input) => {
        arrayForKeyValues[i][j] = parseInt(input);
        resolve();
      });
    });
  }

  console.log("\nMensaje original:", input);
  console.log("\n");
  let newValue = input.toLowerCase().split('');

  // matriz ingresada de 3x3
  for (let i = 0; i < filas; i++) {
    arrayForKeyValues[i] = [];
    for (let j = 0; j < columnas; j++) {
      await preguntarValor(i, j);
    }
  }
  console.log("\nDada la clave (3x3):");
  console.log(arrayForKeyValues);

  // letras a números
  for (let i = 0; i < newValue.length; i++) {
    let charCode = newValue[i].charCodeAt(0);
    if (charCode === 32) {
      arrayForLetters.push(27); 
    } else if (charCode >= 97 && charCode <= 122) {
      arrayForLetters.push(charCode - 96);
    }
  }
  console.log("\nLetras convertidas a números:");
  // matriz resultante con 3 filas y columnas indefinidas xd
  console.log(arrayForLetters);

  let matriz: number[][] = [[], [], []];
  let index = 0;

  //  matriz columna por columna
  while (index < arrayForLetters.length) {
    for (let i = 0; i < 3; i++) {
      if (index < arrayForLetters.length) {
        matriz[i].push(arrayForLetters[index]);
        index++;
      } else {
        matriz[i].push(27); 
      }
    }
  }

  console.log("\nMatriz M del mensaje:");
  console.log(matriz.map(row => row.join(', ')).join('\n'));

  // Multiplicación de matrices
  let matrizResultado: number[][] = [[], [], []];
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < matriz[0].length; j++) {
      let sum = 0;
      for (let k = 0; k < 3; k++) {
        sum += arrayForKeyValues[i][k] * matriz[k][j];
      }
      matrizResultado[i].push(sum);
    }
  }

  console.log("\nMatriz resultado de la multiplicación:");
  console.log(matrizResultado.map(row => row.join(', ')).join('\n'));

  console.log(`\nMensaje cifrado`);
  let mensajeCifrado = matrizResultado.flat().join(',');
  console.log(mensajeCifrado);

  console.log("\nProceso de descifrado:");

  // calcular la inversa de la matriz clave
  const determinante = calcularDeterminante(arrayForKeyValues);
  if (determinante === 0) {
    console.log("\nLa matriz clave no tiene inversa. No se puede descifrar.");
    return;
  }

  const matrizAdjunta = calcularMatrizAdjunta(arrayForKeyValues);
  const matrizInversa = matrizAdjunta.map(fila => fila.map(valor => valor / determinante));

  console.log("\nMatriz inversa de la clave:");
  console.log(matrizInversa);

  // multiplicar la inversa por la matriz del mensaje cifrado
  let matrizDescifrada: number[][] = [[], [], []];
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < matrizResultado[0].length; j++) {
      let sum = 0;
      for (let k = 0; k < 3; k++) {
        sum += matrizInversa[i][k] * matrizResultado[k][j];
      }
      matrizDescifrada[i].push(Math.round(sum)); 
    }
  }

  console.log("\nMatriz descifrada:");
  console.log(matrizDescifrada.map(row => row.join(', ')).join('\n'));

  // matriz descifrada a texto
  let mensajeDescifrado = '';
  for (let j = 0; j < matrizDescifrada[0].length; j++) {
    for (let i = 0; i < 3; i++) {
      let num = matrizDescifrada[i][j];
      if (num === 27) {
        mensajeDescifrado += ' ';
      } else if (num >= 1 && num <= 26) {
        mensajeDescifrado += String.fromCharCode(num + 96);
      }
    }
  }

  console.log("\nMensaje descifrado:");
  console.log(mensajeDescifrado);
}

// calcular el determinante de matriz 3x3
function calcularDeterminante(matriz: number[][]): number {
  return matriz[0][0] * (matriz[1][1] * matriz[2][2] - matriz[1][2] * matriz[2][1])
       - matriz[0][1] * (matriz[1][0] * matriz[2][2] - matriz[1][2] * matriz[2][0])
       + matriz[0][2] * (matriz[1][0] * matriz[2][1] - matriz[1][1] * matriz[2][0]);
}

// calcular la matriz adjunta de la matriz 3x3
function calcularMatrizAdjunta(matriz: number[][]): number[][] {
  return [
    [
       (matriz[1][1] * matriz[2][2] - matriz[1][2] * matriz[2][1]),
      -(matriz[0][1] * matriz[2][2] - matriz[0][2] * matriz[2][1]),
       (matriz[0][1] * matriz[1][2] - matriz[0][2] * matriz[1][1])
    ],
    [
      -(matriz[1][0] * matriz[2][2] - matriz[1][2] * matriz[2][0]),
       (matriz[0][0] * matriz[2][2] - matriz[0][2] * matriz[2][0]),
      -(matriz[0][0] * matriz[1][2] - matriz[0][2] * matriz[1][0])
    ],
    [
       (matriz[1][0] * matriz[2][1] - matriz[1][1] * matriz[2][0]),
      -(matriz[0][0] * matriz[2][1] - matriz[0][1] * matriz[2][0]),
       (matriz[0][0] * matriz[1][1] - matriz[0][1] * matriz[1][0])
    ]
  ];
}

encrypt().catch(console.error);

export default function Home() {
  return (
    <div>Hola!</div>
  ); 
}
