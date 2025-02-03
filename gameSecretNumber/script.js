function playGame() {
    const secretNumber = Math.floor(Math.random() * 100) + 1;
    console.log(`Компьютер 1 загадал число: ${secretNumber}.`);
  
    let low = 1;
    let high = 100;
    let attempts = 0;
  
    while (true) {
      attempts++;
      const guess = Math.floor((low + high) / 2);
      console.log(`\nКомпьютер 2:  ${guess}.`);
  
      if (guess < secretNumber) {
        console.log("Компьютер 1: Больше.");
        low = guess + 1;
      } else if (guess > secretNumber) {
        console.log("Компьютер 1: Меньше.");
        high = guess - 1;
      } else {
        console.log(`
          Компьютер 1: Угадал! 
          Число ${guess}. 
          Потребовалось ${attempts} попыток.
          `);
        break;
      }
    }
  }
playGame();
  