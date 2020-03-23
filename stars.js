exports.header = (num, str) => {
    let star = '*';
    let starsTop = '';
    let starsBottom = ''

    if (!(num && str)) {
        let defMessage = 'Hi';
        starsTop = star.repeat(10);
        starsBottom = star.repeat(10);
        console.log(starsTop);
        console.log(defMessage);
        console.log(starsBottom);

    } else {
        let message = str;
        starsTop = star.repeat(num);
        starsBottom = star.repeat(num);
        console.log(starsTop);
        console.log(message);
        console.log(starsBottom);
    }
}

