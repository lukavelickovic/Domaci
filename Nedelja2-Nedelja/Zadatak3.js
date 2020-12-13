let str = '';

for(i = 0; i <= 5 ; i++) {
    for(j = 1; j <= i; j++) {
       str += '#';
    }
    str += '\n';
}
console.log(str);