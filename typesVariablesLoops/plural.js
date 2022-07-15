function plural(count, one, few, many) {

var n = Math.abs(count);
n = count % 100;

console.log(n);

if((count%100)>=5 && n<20){
    return `${count} ${many}`;
}
if ((count%10)===1){
    return `${count} ${one}`;
}
if (n>=2 && n<=4){
    return `${count} ${few}`;
}
return `${count} ${many}`;

}
/*console.log(plural(1, 'банан', 'банана', 'бананів'));
console.log(plural(2, 'апельсин', 'апельсина', 'апельсинів'));
console.log(plural(5, 'задача', 'задачі', 'задач'));*/