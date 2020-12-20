function deljivsapet(array) {
    let tmp = []
    for (i = 0, len = array.length; i < len; i++) {
        if(array[i] % 5 == 0){
           tmp.push(array[i]);
           
         }
       }
       return tmp
     }
     console.log(deljivsapet( [2,4,7,10,15,25]))
     // Zadatak2
     const grades = [5, 5, 3, 2, 4];

function getAvg(grades) {
  const total = grades.reduce((acc, c) => acc + c, 0);
  return total / grades.length;
}

const average = getAvg(grades);
console.log(average);