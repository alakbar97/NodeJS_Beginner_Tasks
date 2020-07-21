const add = (a, b, cb) => {
    setTimeout(() => {
        const c = a + b;
        cb(c);
    }, 2000);
}



add(1, 3, (sum) => {
    console.log(sum);
});