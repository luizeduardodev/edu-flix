// Desafios desta aula!

// Criar uma condição para não adicionar filmes repetidos, caso eles já tenham sido adicionados anteriormente;

const btnSubmit = document.getElementById("btn-submit");
const btnClear = document.getElementById("btn-clear");
const containerImg = document.querySelector(".glide__slides");

let arrayFilms = [];

const clearInputValue = () => {
    let inputText = (document.querySelector("#input-text").value = "");
};

btnSubmit.addEventListener("click", (event) => {
    event.preventDefault();

    let inputText = document.querySelector("#input-text").value;
    const parseString = String(inputText);

    if (inputText == "" || (parseString.endsWith(".jpg") || parseString.endsWith(".png")) === false) {
        alert("Insira uma url!");
    } else {
        const indexHttp = parseString.indexOf("http", 0);

        return indexHttp === 0 ? addImage(inputText) : alert("Url inválida!");
    }
});

const addImage = (inputText) => {
    const createdLiElement = document.createElement("li");
    createdLiElement.classList.add("glide__slide");

    createdLiElement.innerHTML = `<img src=${inputText} />`;
    containerImg.appendChild(createdLiElement);

    alert("Poster adicionado com sucesso!");

    addPosterLocalStorage(inputText);
    window.location.reload(); //Recarrego a página para o poster aparecer na tela;

    clearInputValue();
};

const addPosterLocalStorage = (inputText) => {
    if (localStorage.poster) {
        arrayFilms = JSON.parse(localStorage.getItem("poster"));
    }

    let newFilm = inputText;
    arrayFilms.push(newFilm);
    localStorage.poster = JSON.stringify(arrayFilms);
};

const getFilmLocal = () => {
    if (localStorage.poster) {
        arrayFilms = JSON.parse(localStorage.getItem("poster"));
    }

    arrayFilms.forEach((film) => {
        const createdLiElement = document.createElement("li");
        createdLiElement.classList.add("glide__slide");

        createdLiElement.innerHTML = `<img src=${film} />`;
        containerImg.appendChild(createdLiElement);
    });
};
getFilmLocal();

btnClear.addEventListener("click", (event) => {
    event.preventDefault();

    if (localStorage.poster) {
        const result = confirm("Tem certeza? ");

        if (result === true) {
            localStorage.clear();
            window.location.reload();
        } else {
            alert("Ação cancelada!");
        }
    }
});

const showMessage = () => {
    const containerSlides = document.querySelector(".glide");
    const glideTrack = document.querySelector(".glide__track");

    const h2 = document.createElement("h2");
    h2.innerText = "A sua lista está vázia. Adicione alguns filmes :)";
    h2.classList.add("element-h2-style-list");

    if (!localStorage.poster) {
        containerSlides.replaceChild(h2, glideTrack);
    }
};
showMessage();
