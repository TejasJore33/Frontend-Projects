let btn = document.querySelector("button");

btn.addEventListener("click", function() {
    console.log("You clicked the button");

    let h3 = document.querySelector("h3");
    let randomColor = getRandomColor();
    h3.innerText = `New Color: ${randomColor}`;

    let div = document.querySelector("div");
    div.style.backgroundColor = randomColor;

    console.log("Color updated");
});

function getRandomColor() {
    let red = Math.floor(Math.random() * 256);  // 0 to 255
    let green = Math.floor(Math.random() * 256); 
    let blue = Math.floor(Math.random() * 256);

    let color = `rgb(${red}, ${green}, ${blue})`;  // Correct format for CSS
    return color;
}
