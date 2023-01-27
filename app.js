const jokeText = document.querySelector("#joke");
const jokeBtn = document.querySelector("#jokeBtn");

jokeBtn.addEventListener("click", generateJoke);

generateJoke();

// async-await custom
async function generateJoke() {
    const config = {
        headers: {
            Accept: "application/json",
        },
    }
    const res = await fetch('https://icanhazdadjoke.com', config);
    const data = await res.json();
    jokeText.innerHTML = data.joke
}


// then-catch custom
/*
function generateJoke() {
    const config = {
        headers: {
            Accept: "application/json",
        },
    };

    fetch("https://icanhazdadjoke.com", config)
        .then((res) => res.json())
        .then((data) => {
        console.log(data);
        jokeText.innerHTML = data.joke
    });
}
*/