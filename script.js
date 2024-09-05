const colors = [
    "#000000",
    "#6200EE",
    "#3700B3",
    "#344955",
    "#232F34",
    "#4A6572",
    "#F9AA33",
    "#5D1049",
    "#4E0D3A",
    "#720D5D",
    "#E30425",
    "#FEDBD0",
    "#442C2E",
    "#FEEAE6",
    "#FF0266",
    "#03DAC5",
    "#442C2E",
    "#344955",
    "#F4511E",
    "#356859",
    "#37966F",
    "#B9E4C9",
    "#FFFBE6",
    "#FEDBD0",
    "#B00020 ",
    "#2f3640",
    "#192a56",
    "#273c75",
    "#718093",
    "#7f8fa6",
    "#f5f6fa",
    "#c23616",
    "#e84118",
    "#0097e6",
    "#00a8ff",
    "#8c7ae6",
    "#9c88ff",
    "#4cd137",
    "#44bd32",
    "#353b48",
    "#40739e",
    "#487eb0",
    "#68f1f8",
    "#13D9E7",
    "#083744",
    "#165363",
    "#166474",
    "#0f7c8f",
    "",
];


const colorBoxContainer = document.querySelector(".box__container");
console.log(colors);



for(let i = 0; i < colors.length; i++){
    colorBoxContainer.innerHTML += `<div class="box" style="background-color:${colors[i]}">${colors[i]}</div>`;
}D