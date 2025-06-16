let x = document.getElementById("main")

let arr = ["https://i.pinimg.com/736x/b5/9b/52/b59b52865d523abbde4ac42c504a958a.jpg",
    "https://i.pinimg.com/736x/7a/66/15/7a6615072a6613d1f8dff64532ad44d1.jpg",
    "https://i.pinimg.com/736x/1e/c3/5c/1ec35cb4cec738c71b59e51e26cae662.jpg",
    "https://i.pinimg.com/736x/1e/c3/5c/1ec35cb4cec738c71b59e51e26cae662.jpg",
    "https://i.pinimg.com/736x/17/dc/f0/17dcf00ea15c5e846803d2eb3f3310ed.jpg",
    "https://i.pinimg.com/736x/06/d0/11/06d01145351e127a47575c11f2f1606d.jpg",
    "https://i.pinimg.com/736x/77/45/da/7745da13a09abf515fd0edf857341433.jpg",
    "https://i.pinimg.com/736x/d5/f4/4b/d5f44b383e0e9528d707e769560f50e6.jpg"
];

let str = "";

for (let i = 1; i < 37; i++) {
    let r = Math.floor(Math.random()*(arr.length));
    str += `<div class="card"><img src=${arr[r]}></div>`;
}
x.innerHTML = str;