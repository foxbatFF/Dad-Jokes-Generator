# Dad-Jokes-Generator

Entry Level - Making pranksters using API. Build with async-await and then-catch


// async-await custom

    async function generateJoke() {
    const config = {
        headers: {
            Accept: "application/json",
        },
    };
    
    const res = await fetch('https://icanhazdadjoke.com', config);
    const data = await res.json();
    jokeText.innerHTML = data.joke
    }

// then-catch custom

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

![Ekran Görüntüsü (169)](https://user-images.githubusercontent.com/121855406/215101725-5e1d0de9-0a10-40db-83d0-c2dac7cf869d.png)

![Ekran Görüntüsü (171)](https://user-images.githubusercontent.com/121855406/215101740-11ed23bf-35b0-406d-8856-8a6df210180e.png)

![Ekran Görüntüsü (172)](https://user-images.githubusercontent.com/121855406/215101745-981124f4-cab8-4d97-8b01-f0b8e8317003.png)
