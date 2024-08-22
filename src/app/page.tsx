import { resolve } from 'path';
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

const askQuestionNumber = (question: string): Promise<number> => {
  return new Promise((resolve, reject) => {
    rl.question(question, (answer) => {
      const num = parseFloat(answer);
      if (isNaN(num)) {
        reject(new Error('La entrada no es un número válido'));
      } else {
        resolve(num);
      }
    });
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

const grain = () => {
  
  let matriz: number[][] = [];
  let cont: number = 1;
  let total: number = 0;

  for ( let i = 0; i < 8; i++ ) {
    matriz[i] = [];
  }

  for ( let i = 0; i < 8; i++ ) {
    console.log(i);
    for ( let j = 0; j < 8; j++ ) {
      matriz[i][j] = cont;
      total += cont;
      cont = 2 * cont;
    }
  }

  // Imprimir la matriz
  for (let i = 0; i < 8; i++) {
    console.log(matriz[i].join('\t')); // Imprime cada fila en una línea
  }

  console.log(`Total de granos de trigo en todo el tablero ${total}`);
  
}

// grain();

/* VERSION MEJORADA
const grain = () => {
  let matriz: bigint[][] = [];
  let cont: bigint = 1n;
  let total: bigint = 0n;
  let casilla: number = 1;

  for (let i = 0; i < 8; i++) {
    matriz[i] = [];
    for (let j = 0; j < 8; j++) {
      matriz[i][j] = cont;
      total += cont;
      console.log(`Casilla ${casilla}: ${cont.toLocaleString()} granos`);
      cont *= 2n;
      casilla++;
    }
  }

  console.log("\nMatriz del tablero:");
  for (let i = 0; i < 8; i++) {
    console.log(matriz[i].map(n => n.toLocaleString()).join('\t'));
  }

  console.log(`\nTotal de granos de trigo en todo el tablero: ${total.toLocaleString()}`);
}

grain(); */

const multiplicationTable = () => {
  let matriz: number[][] = [];
  let cont: number = 1;
  let uno: number = 1;
  let dos: number = 2;
  let tres: number = 3;
  let cuatro: number = 4;
  let cinco: number = 5;
  let seis: number = 6;
  let siete: number = 7;
  let ocho: number = 8;
  let nueve: number = 9;
  let diez: number = 10;
  let once: number = 11;
  let doce: number = 12;
  let trece: number = 13;
  let catorce: number = 14;
  let quince: number = 15;

  for ( let i = 0; i <= 15; i++ ) {
    matriz[i] = [];
  }

  for ( let i = 0; i <= 15; i++ ) {
    let multiplicar: number = 1;
    for ( let j = 0; j <= 15; j++ ) {
      if ( cont === 1 ) {
        matriz[i][j] = uno;
        uno = 1 * multiplicar;
        multiplicar++;
      }
      if ( cont == 2) {
        matriz[i][j] = dos;
        dos = 2 * multiplicar;
        multiplicar++;
      }
      if ( cont === 3 ) {
        matriz[i][j] = tres;
        tres = 3 * multiplicar;
        multiplicar++;
      }
      if ( cont === 4 ) {
        matriz[i][j] = cuatro;
        cuatro = 4 * multiplicar;
        multiplicar++;
      }
      if ( cont === 5 ) {
        matriz[i][j] = cinco;
        cinco = 5 * multiplicar;
        multiplicar++;
      }
      if ( cont === 6 ) {
        matriz[i][j] = seis;
        seis = 6 * multiplicar;
        multiplicar++;
      }
      if ( cont === 7 ) {
        matriz[i][j] = siete;
        siete = 7 * multiplicar;
        multiplicar++;
      }
      if ( cont === 8 ) {
        matriz[i][j] = ocho;
        ocho = 8 * multiplicar;
        multiplicar++;
      }
      if ( cont === 9 ) {
        matriz[i][j] = nueve;
        nueve = 9 * multiplicar;
        multiplicar++;
      }
      if ( cont === 10 ) {
        matriz[i][j] = diez;
        diez = 10 * multiplicar;
        multiplicar++;
      }
      if ( cont === 11 ) {
        matriz[i][j] = once;
        once = 11 * multiplicar;
        multiplicar++;
      }
      if ( cont === 12 ) {
        matriz[i][j] = doce;
        doce = 12 * multiplicar;
        multiplicar++;
      }
      if ( cont === 13 ) {
        matriz[i][j] = trece;
        trece = 13 * multiplicar;
        multiplicar++;
      }
      if ( cont === 14 ) {
        matriz[i][j] = catorce;
        catorce = 14 * multiplicar;
        multiplicar++;
      }
      if ( cont === 15 ) {
        matriz[i][j] = quince;
        quince = 15 * multiplicar;
        multiplicar++;
      }

    }
    cont++;
  }

  for ( let i = 0; i <= 15; i++ ) {
    console.log(matriz[i].join('\t'));
  }

}

//multiplicationTable();

/* VERSION MEJORADA
const multiplicationTable = () => {
  let matriz: number[][] = [];

  // Crear la matriz y llenarla con los productos
  for (let i = 1; i <= 15; i++) {
    matriz[i] = [];
    for (let j = 1; j <= 15; j++) {
      matriz[i][j] = i * j;
    }
  }

  // Imprimir la tabla
  console.log("    " + Array.from({length: 15}, (_, i) => (i + 1).toString().padStart(4)).join(''));
  for (let i = 1; i <= 15; i++) {
    console.log(i.toString().padStart(2) + ": " + matriz[i].slice(1).map(n => n.toString().padStart(4)).join(''));
  }
}

multiplicationTable(); */


const GameBuster = async (): Promise<void> => {

  try {

    type Category = "Aventura" | "Disparos" | "Estrategia" | "Deporte" | "Pelea";

    let categories: Category[] = [
      "Aventura",
      "Disparos",
      "Estrategia",
      "Deporte",
      "Pelea"
    ];
    
    class Game {
      id: number;
      name: string;
      category: Category;
      price: number;
      status: string;
      count: number;
      totalByGame: number;
      totalByCategory: number;
      
      constructor(id: number, name: string, category: Category, price: number, status: string, count: number, totalByGame: number, totalByCategory: number ) {

        if ( !categories.includes(category)) {
          throw new Error('Categoria no valida');
        }

        this.id = id;
        this.name = name;
        this.category = category;
        this.price = price;
        this.status = status;
        this.count = count;
        this.totalByGame = totalByGame;
        this.totalByCategory = totalByCategory;
      }
    }
    

    let registerCounter = 3;
    let rentalCounter: number = 0;
    let totalRentalIncome: number = 0;
    let option: string;
    let games: Game[] = [
      new Game(1, 'Minecraft', 'Aventura', 100, 'Disponible', 0, 0, 0),
      new Game(2, 'Doom', 'Disparos', 75, 'Disponible', 0, 0, 0),
      new Game(3, 'FIFA 2019', 'Deporte', 110, 'Disponible', 0, 0, 0)
    ];

    const showAccountingReport = (games: Game[], registerCounter: number, rentalCounter: number, totalRentalIncome: number): void => {
      console.log(`Cantidad de videojuegos registrados: ${registerCounter}`);
      console.log(`Cantidad de videojuegos disponibles:`);
      let counterGameAvailable: number = 0;
      for ( let  i = 0; i < games.length; i++ ) {
        if ( games[i].status === 'Disponible') {
          counterGameAvailable++;
        } 
      }
      console.log(`${counterGameAvailable}`)
      console.log(`Cantidad de videojuegos en alquiler:`);
      let counterGamesForRent: number = 0;
      for ( let i = 0; i < games.length; i++ ) {
        if ( games[i].status === 'Alquilado' ) {
          counterGamesForRent++;
        }
      }
      console.log(`${counterGamesForRent}`);
    
      console.log(`Cantidad de alquileres realizados ${rentalCounter}`);
      console.log(`Ingreso total por alquileres ${totalRentalIncome}`);
      console.log(`Ingresos totales por categoría (desplegar montos por cada categoría)`);
      for (let i = 0; i < games.length; i++) {
        if (games[i].category === 'Aventura') {
          console.log(`Aventura - ${games[i].totalByCategory}`);
        } 
        if (games[i].category === 'Deporte') {
          console.log(`Deporte - ${games[i].totalByCategory}`);
        }
        if (games[i].category === 'Disparos') {
          console.log(`Disparos - ${games[i].totalByCategory}`);
        }
        if (games[i].category === 'Estrategia') {
          console.log(`Estrategia - ${games[i].totalByCategory}`);
        }
        if (games[i].category === 'Pelea') {
          console.log(`Pelea - ${games[i].totalByCategory}`);
        }
      }
    
      console.log(`Categoría líder de videojuegos con mayores ingresos (desplegar monto)`);
      let arrayByCategory = [...games].sort((a, b) => b.totalByCategory - a.totalByCategory);
      let mostRevenueCategory = arrayByCategory[0];
      console.log(`${mostRevenueCategory.category}, con un monto de: ${mostRevenueCategory.totalByCategory}`);
    
      console.log(`Videojuego líder con mayores ingresos (desplegar monto)`);
      let arrayByGame = [...games].sort((a, b) => b.totalByGame - a.totalByGame);
      let leaderGame = arrayByGame[0];
      console.log(`${leaderGame.name}, con un monto de: ${leaderGame.totalByGame}`);
    }

    do {
      console.log('Menu');
      console.log('1. Registrar videojuego');
      console.log('2. Alquiler');
      console.log('3. Devolucion');
      console.log('4. Inventario Actual');
      console.log('5. Juegos en Alquiler');
      console.log('6. Top 3 juegos mas solicitados');
      console.log('7. Listado de juegos por demanda');
      console.log('8. Cantidad de juegos por categoria');
      console.log('9. Informe contable');
      console.log('10. Salir');

      option = await askQuestion('Selecciona una opción: ');
      

      switch(option) {
        case '1':
          let gameName: string = await new Promise((resolve) => {
            rl.question('Introduce el nombre del juego: ', resolve);
          });
        
          console.log('Selecciona alguna de las siguientes categorias:');
          for (let i = 0; i < categories.length; i++) {
            console.log(`${i+1} - ${categories[i]}`);
          }
        
          let category: Category = 'Aventura';

          let isValidCategory = false;
          while (!isValidCategory) {
            const categoryInput: string = await new Promise((resolve) => {
              rl.question('Introduce la categoria (1-5): ', resolve);
            });
          
            let selectCategory: number = Number(categoryInput);
          
            if (selectCategory >= 1 && selectCategory <= 5) {
              switch(selectCategory) {
                case 1:
                  category = 'Aventura';
                  isValidCategory = true;
                  break;
                case 2:
                  category = 'Disparos';
                  isValidCategory = true;
                  break;
                case 3:
                  category = 'Estrategia';
                  isValidCategory = true;
                  break;
                  category = 'Deporte';
                case 4:
                  isValidCategory = true;
                  break;
                case 5:
                  category = 'Pelea';
                  isValidCategory = true;
                  break;
              }
            }
            
            if (!isValidCategory) {
              console.log('Categoría no válida. Por favor, selecciona un número del 1 al 5.');
            }
          }

          let price: number;
          do {
            const priceInput: string = await new Promise((resolve) => {
              rl.question('Introduce el precio: ', resolve);
            });
            price = Number(priceInput);
          } while (isNaN(price) || price < 0);

          let status: string = 'Disponible';
          let counter: number = 0;
          let totalGame: number = 0;
          let totalCategory: number = 0;
          let gameId: number = 0;

          for ( let i = 0; i <games.length; i++ ) {
            gameId = games[i].id;
          }
          
          gameId++;

          let newGame = new Game(gameId++, gameName, category, price, status, counter, totalGame, totalCategory);
          games.push(newGame);
          registerCounter++;

          console.log(`Juego "${gameName}" añadido correctamente.`);
          
          break;
      
        case '2':
          
          console.log(`Juegos Disponibles`);
          for ( let  i = 0; i < games.length; i++ ) {
            if ( games[i].status === 'Disponible') {
              console.log(`${i+1} - ${games[i].name}`);
            } 
          }
          // console.log(`Seleccione el juego que desea alquilar`);
          let gameWanted: number;
          
          const gameInput: string = await new Promise((resolve) => {
            rl.question('Introduce el juego que desea: ', resolve);
          });
          gameWanted = Number(gameInput);
        
          
          for ( let i = 0; i < games.length; i++ ) {
            if ( games[i].id === gameWanted ) {
              console.log('Juego alquilado!');
              console.log(`El precio de alquiler es de ${games[i].price}`);
              games[i].status = 'Alquilado';
              games[i].count += 1;
              rentalCounter++;
              totalRentalIncome += games[i].price;
              games[i].totalByGame += games[i].price;

              if ( games[i].category === 'Aventura' ) {
                games[i].totalByCategory += games[i].price;
              } else if ( games[i].category === 'Deporte') {
                games[i].totalByCategory += games[i].price;
              } else if ( games[i].category === 'Disparos') {
                games[i].totalByCategory += games[i].price;
              } else if ( games[i].category === 'Estrategia') {
                games[i].totalByCategory += games[i].price;
              } else if ( games[i].category === 'Pelea') {
                games[i].totalByCategory += games[i].price;
              }
            }
          }
          break;

        case '3':
          let returnGame: number;

          console.log(`Juegos alquilados:`);
          for ( let i = 0; i < games.length; i++ ) {
            if ( games[i].status === 'Alquilado' ) {
              console.log(`${i+1} - ${games[i].name}`);
            }
          }
          
          const gameInput2: string = await new Promise((resolve) => {
            rl.question('Introduce el juego que quiere devolver: ', resolve);
          });
          returnGame = Number(gameInput2);

          for ( let i = 0; i < games.length; i++ ) {
            if ( games[i].id === returnGame ) {
              console.log(`Juego devuelto:`);
              console.log(`${games[i].name}`);
              games[i].status = 'Disponible';
            }
          }
          break;

        case '4':
          console.log(`Juego---------------Estado-----------Categoria------------Precio Alquiler-----------Alquileres`);
          for ( let i = 0; i < games.length; i++) {
            console.log(`${games[i].name}          ${games[i].status}           ${games[i].category}                 ${games[i].price}                        ${games[i].count}`);
          }      
          break;

        case '5':
          console.log(`Juegos alquilados:`);
          console.log(`Juego---------------Estado-----------Categoria------------Precio Alquiler-----------Alquileres`);
          for ( let i = 0; i < games.length; i++ ) {
            if ( games[i].status === 'Alquilado' ) {
              console.log(`${games[i].name}          ${games[i].status}           ${games[i].category}                 ${games[i].price}                      ${games[i].count}`);
            }
          }
          break;

        case '6':
          console.log(`3 videojuegos mas alquilados`);
          let aux;
          let gamesArray = [];

          for (let i = 0; i < games.length; i++) {
              gamesArray.push(games[i]);
          }

          for (let i = 0; i < gamesArray.length; i++) {
            for (let j = 0; j < gamesArray.length - i - 1; j++) {
              if (gamesArray[j].count < gamesArray[j+1].count) {
                // Intercambia los objetos completos, no solo el count
                aux = gamesArray[j];
                gamesArray[j] = gamesArray[j+1];
                gamesArray[j+1] = aux;
              }
            }
          }

          for ( let i = 0; i < 3; i++ ) {
            console.log(`${gamesArray[i].name}          ${gamesArray[i].count}`);
          }
          break;

        case '7':
          let quantity: number;
          const quantityInput: string = await new Promise((resolve) => {
            rl.question('Introduce la cantidad que desea: ', resolve);
          });
          quantity = Number(quantityInput);

          console.log(`Videojuegos con la cantidad de alquileres mayor o igual a dicha cantidad.`);
          for ( let i = 0; i < games.length; i++ ) {
            if ( games[i].count >= quantity ) {
              console.log(`${games[i].name}`);
            }
          }
          break;

        case '8':
          console.log(`Videojuegos existentes para cada categoria`);
          let countAdventure: number = 0, 
              countShooting = 0, countSport = 0, countStrategy = 0, countFight = 0;

          for ( let i = 0; i < games.length; i++ ) {
            // console.log(categories[i]);
            if ( games[i].category === 'Aventura') {
              countAdventure++;
            }
    
            if ( games[i].category === 'Deporte' ) {
              countSport++;
            }
    
            if ( games[i].category === 'Disparos' ) {
              countShooting++;
            }
    
            if ( games[i].category === 'Estrategia' ) {
              countStrategy++;
            }

            if ( games[i].category === 'Pelea' ) {
              countFight++;
            }
          }

          console.log(`Aventura - ${countAdventure}`);
          console.log(`Deportes - ${countSport}`);
          console.log(`Estrategia - ${countStrategy}`);
          console.log(`Disparos - ${countShooting}`);
          console.log(`Pelea - ${countFight}`);
          break;

        case '9':
          console.log(`Cantidad de videojuegos registrados: ${registerCounter}`);
          console.log(`Cantidad de videojuegos disponibles:`);
          let counterGameAvailable: number = 0;
          for ( let  i = 0; i < games.length; i++ ) {
            if ( games[i].status === 'Disponible') {
              counterGameAvailable++;
            } 
          }
          console.log(`${counterGameAvailable}`);

          console.log(`Cantidad de videojuegos en alquiler:`);
          let counterGamesForRent: number = 0;
          for ( let i = 0; i < games.length; i++ ) {
            if ( games[i].status === 'Alquilado' ) {
              counterGamesForRent++;
            }
          }
          console.log(`${counterGamesForRent}`);

          console.log(`Cantidad de alquileres realizados: ${rentalCounter}`);
          console.log(`Ingreso total por alquileres: ${totalRentalIncome}`);
          console.log(`Ingresos totales por categoría (desplegar montos por cada categoría)`);
          for( let i = 0; i < games.length; i++ ) {
            if( games[i].category === 'Aventura') {
              console.log(`Aventura - ${games[i].totalByCategory}`);
            } 
          
            if ( games[i].category === 'Deporte') {
              console.log(`Deporte - ${games[i].totalByCategory}`);
            }
            
            if ( games[i].category === 'Disparos') {
              console.log(`Disparos - ${games[i].totalByCategory}`);
            }

            if ( games[i].category === 'Estrategia') {
              console.log(`Estrategia - ${games[i].totalByCategory}`);
            }

            if ( games[i].category === 'Pelea') {
              console.log(`Pelea - ${games[i].totalByCategory}`);
            }
          }

          console.log(`Categoría líder de videojuegos con mayores ingresos (desplegar monto)`);

          let mayorPorCategoria;
          let arrayByCategory = [];

          for ( let  i = 0; i < games.length; i++ ) {
            arrayByCategory.push(games[i]);
          }

          for ( let i = 0; i < arrayByCategory.length; i++ ) {
            for ( let j = 0; j < arrayByCategory.length - i - 1; j++ ) {
              if ( arrayByCategory[j].totalByCategory < arrayByCategory[j+1].totalByCategory ) {
                mayorPorCategoria = arrayByCategory[j];
                arrayByCategory[j] = arrayByCategory[j+1];
                arrayByCategory[j+1] = mayorPorCategoria;
              }
            }
          }

          let mostRevenueCategory;
          mostRevenueCategory = arrayByCategory.shift();
          
          console.log(`${mostRevenueCategory?.category}, con un monto de: ${mostRevenueCategory?.totalByCategory}`);
        
          console.log(`Videojuego líder con mayores ingresos (desplegar monto)`);

          let arrayByGame = [];

          for ( let i = 0; i < games.length; i++ ) {
            arrayByGame.push(games[i]);
          }

          let temp2;
          for ( let i = 0; i < arrayByGame.length; i++ ) {
            for ( let j = 0; j < arrayByGame.length - i - 1; j++ ) {
              if ( arrayByGame[j].totalByGame < arrayByGame[j+1].totalByGame ) {
                temp2 = arrayByGame[j];
                arrayByGame[j] = arrayByGame[j+1];
                arrayByGame[j+1] = temp2;
              }
            }
          }

          let leaderGame;
          
          leaderGame = arrayByGame.shift();

          console.log(`${leaderGame?.name}, con un monto de: ${leaderGame?.totalByGame}`);
        
          break;

        case '10':
          console.log('Informe contable final:');
          showAccountingReport(games, registerCounter, rentalCounter, totalRentalIncome);
          console.log('Gracias por usar GameBuster. ¡Hasta luego!');
          break;
        
        default:
          console.log('Opción no válida. Por favor, selecciona una opción del 1 al 10.');
      }
    } while ( option !== '10');
  

  } catch (error) {
  console.error('Ocurrió un error:', error);
  } finally {
    rl.close();
  }
}

GameBuster().catch(console.error);

const employeeSalary = async (): Promise<void> =>{
 
  let array: number[] = [];
  let highSalary = 0;
  let middleSalary = 0;
  let lowSalary = 0;
  
  function preguntarValor(i: number): Promise<void> {
    return new Promise((resolve) => {
      rl.question(`Ingrese su salario: [${i+1}]: `, (input) => {
        array[i] = parseInt(input);
        resolve();
      });
    });
  }
  
  for ( let i = 0; i < 15; i++ ) {
    await preguntarValor(i);
  }
  
  for ( let i = 0; i < array.length; i++ ) {
    if ( array[i] > 15000) {
      highSalary++;
    } else if ( array[i] >= 7000 && array[i] <= 15000) {
      middleSalary++;
    } else {
      lowSalary++;
    }
  }

  console.log(`---------------------------------------------`);
  console.log(`| Salarios altos: ${highSalary} empleados    |`);
  console.log(`| Salarios medios: ${middleSalary} empleados |`);
  console.log(`| Salarios bajos: ${lowSalary} empleados     |`);
  console.log(`---------------------------------------------`);
}

// employeeSalary().catch(console.error);

const sumOfCicles = async (): Promise<void> => {
  let sumatoriaFor = 0;

  let contadorWhile = 1;
  let sumatoriaWhile = 0;

  let contadorDoWhile= 1;
  let sumatoriaDoWhile = 0;

  while ( contadorWhile <= 100) {
    sumatoriaWhile += contadorWhile;
    contadorWhile++;
  }

  do {
    sumatoriaDoWhile += contadorDoWhile;
    contadorDoWhile++;
  } while ( contadorDoWhile <= 100 );

  for ( let i = 1; i <= 100; i++ ) {
    sumatoriaFor += i;
  }

  console.log(`Suma del ciclo while: ${sumatoriaWhile}`);
  console.log(`SUma del ciclo do-while: ${sumatoriaDoWhile}`);
  console.log(`Suma del ciclo for: ${sumatoriaFor}`);
  
}

// sumOfCicles().catch(console.error);

const nthPrime = async (): Promise<void> => {

  const input: string = await new Promise((resolve) => {
    rl.question('Introduce un número: ', resolve);
  });
  const num = Number(input);

  let array: number[] = [];

  function isPrime(num: number): boolean {
    if (num <= 1) return false; // numeros negativos
    if (num === 2) return true; // unico par primo
    if (num % 2 === 0) return false; // numeros pares no son primos

    // aqui evalua de impar en impar si tienen divisores, si es asi entonces es false
    for (let i = 3; i <= Math.sqrt(num); i += 2) {// llega hasta la raiz, si encuentra un divisor entonces tiene par, por lo tanto es false y no es primo
      // comprueba si i es un divisor de num?, o sea si num es divisible por i, el resultado sera cero
      if (num % i === 0) return false;
    }
    
    return true;
  }

  let count = 0;
  let i = 2;
  while (count < num) {
    if (isPrime(i)) {
      array.push(i);
      count++;
    }
  i++;
}

  console.log(`Numeros primos: ${array}`);
}

// nthPrime().catch(console.error);

const sumattion = async (): Promise<void> => {
  const input: string = await new Promise((resolve) => {
    rl.question('Introduce un número: ', resolve);
  });
  const num = Number(input);

  let sum: number = 0;

  for ( let i = 1; i <= num; i++ ) {
    sum = sum + i;
  }
  console.log(`La sumatoria es: ${sum}`);

}

// sumattion().catch(console.error)

/* VERSION MEJORADA
const calculateSum = (num: number): number => {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
}

const sumatoria = async (): Promise<void> => {
  const input: string = await new Promise((resolve) => {
    rl.question('Introduce un número: ', resolve);
  });
  const num = Number(input);

  const result = calculateSum(num);
  console.log(`La sumatoria es: ${result}`);
}

sumatoria().catch(console.error) */

const factorial = async (): Promise<void> => {
  const input: string = await new Promise((resolve) => {
    rl.question('Introduce un número: ', resolve);
  });
  const num = Number(input);

  let factorialResult: number = 1;

  for ( let i = 1; i <= num; i++ ) {
    factorialResult = factorialResult * i;
  }
  console.log(`El factorial es: ${factorialResult}`);

}

// factorial().catch(console.error)

/* VERSION MEJORADA
const calculateFactorial = (num: number): number => {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
}

const factorial = async (): Promise<void> => {
  const input: string = await new Promise((resolve) => {
    rl.question('Introduce un número: ', resolve);
  });
  const num = Number(input);

  const factorialResult = calculateFactorial(num);
  console.log(`El factorial es: ${factorialResult}`);
}

factorial().catch(console.error) */

const raindrops = async (): Promise<void> => {

  let array: number[] = [];

  const input: string = await new Promise((resolve) => {
    rl.question('Introduce la cantidad de numeros: ', resolve);
  });
  const num = Number(input);

  for ( let i = 0; i < num; i++ ) {
    await preguntarValor(i);
  }

  function preguntarValor(i: number): Promise<void> {
    return new Promise((resolve) => {
      rl.question(`Ingrese el numero: [${i}]: `, (input) => {
        array[i] = parseInt(input);
        resolve();
      });
    });
  }
  
  console.log(array);

  let cadena: string = '';

  // Crear una función separada para comprobar la divisibilidad
  function checkRaindrop(num: number): string {
    let result = '';
    // se agregan todas las palabras aplicables
    // para un número como 15, deberíamos obtener 'PlingPlang'.
    if (num % 3 === 0) result += 'Pling';
    if (num % 5 === 0) result += 'Plang';
    if (num % 7 === 0) result += 'Plong';
    return result || 'Plung'; // si result esta vacia, entonces devuelve Plung
  }

  // Usar esta función en el bucle principal
  for (let i = 0; i < array.length; i++) {
    cadena += checkRaindrop(array[i]);
  }

  console.log(cadena);
  
}

// raindrops().catch(console.error);





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

// encrypt().catch(console.error);

export default function Home() {
  return (
    <div>Hola!</div>
  ); 
}
