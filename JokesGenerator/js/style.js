const jokeEl = document.getElementById("joke");
const jokebtn = document.getElementById("joke-btn");
const urlBase = "https://icanhazdadjoke.com";
const apiHeadersConfiguration = {
  headers: {
    Accept: "application/json",
  },
};

generateJoke();

jokebtn.addEventListener("click", () => {
  generateJoke();
});

async function generateJoke() {
  const resp = await fetch(urlBase, apiHeadersConfiguration);
  const data = await resp.json();
  jokeEl.innerText = data.joke;
}

// function generateJoke(){
//     const config = {
//         headers: {
//             Accept: 'application/json',
//         },
//     }

//    fetch('https://icanhazdadjoke.com', config)
//     .then((res) => res.json())
//     .then((data) => {
//        jokeEl.innerText  = data.joke
//     })
// }
