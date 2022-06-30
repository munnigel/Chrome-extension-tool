// document.querySelector('.lnXdpd').classList.add('spinspinspin')

let f = 0;
let s = 0;
let t = 0;

const first = document.createElement("button");
first.innerText = "<a>";
first.id = "first";

const second = document.createElement("button");
second.innerText = "<div>";
second.id = "second";

const third = document.createElement("button");
third.innerText = "<img>";
third.id = "third";

document.querySelector('body').appendChild(first);
document.querySelector('body').appendChild(second);
document.querySelector('body').append(third);

first.addEventListener('click', () => {
    if (f % 2 === 0) {
        document.querySelectorAll('button').forEach(a => {
            a.style.boxShadow = '0 0 10px #00ba99';
            console.log(a);
        })
    }
    else {
        document.querySelectorAll('button').forEach(a => {
            a.style.boxShadow = 'none';
            console.clear();
        }
        )
    }
    f++;
})



second.addEventListener("click", () => {
    if (s % 2 === 0) {
        document.querySelectorAll('div').forEach(a => {
            a.style.boxShadow = '0 0 4px red';
            console.log(a);
        })
    }
    else {
        document.querySelectorAll('div').forEach(a => {
            a.style.boxShadow = 'none';
            console.clear();
        }
        )
    }
    s++;
})


third.addEventListener("click", () => {
    if (t % 2 === 0) {
        document.querySelectorAll('img').forEach(a => {
            a.style.boxShadow = '0 0 12px #f69d35';
            console.log(a);
        })
    }
    else {
        document.querySelectorAll('img').forEach(a => {
            a.style.boxShadow = 'none';
            console.clear();
        }
        )
    }
    t++;
})