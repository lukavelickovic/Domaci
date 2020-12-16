function timeOfDay() {
    let hour = 8
    if (hour >= 4 && hour <= 11) return 'jutro';
    if (hour >= 12 && hour <= 16) return 'dan';
    if (hour >= 17 && hour <= 3) return 'vece';
  }
  
  console.log(`Dobro ${timeOfDay()}!`);