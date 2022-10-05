function checkSafari() {
    let ua = navigator.userAgent.toLowerCase();
    if (ua.indexOf("safari") != -1) {
        return ua.indexOf("chrome") > -1 ? false : true;
    }
}

function zeroNum(num) {
    let str = `${num}`
    return str.length < 2 ? `0${str}` : `${str}`
}

function declOfNum(number, titles) {
    return titles[
        number % 100 > 4 && number % 100 < 20 ?
        2 : [2, 0, 1, 1, 1, 2][number % 10 < 5 ? Math.abs(number) % 10 : 5]
    ];
};

const pageManager = new Page(document.querySelector('body'))