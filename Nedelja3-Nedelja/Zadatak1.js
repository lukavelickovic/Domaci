let array = [1,2,3,4,5,10,15,23,1,5];

    let divFive = [];
    
    let divisibleByFive = function (array) {
      for (i = 0; i < array.length; i++) {
        if (array[i] % 5 === 0) {
          divFive.push(array[i]);
        }
      }
    }

divisibleByFive(array);
divFive.forEach(x => console.log(x));