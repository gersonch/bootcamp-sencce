const div = document.getElementById("div");
const URL = "https://swapi.dev/api/people/";

for (let i = 1; i < 15; i++) {
  fetch(`${URL + i}/`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data.name);
      div.innerHTML += `

      <div
            class="card flex flex-col justify-center py-4 px-8 shadow-lg shadow-[#ffff64b3] w-80 h-64 hover:scale-105 transition rounded-xl cursor-pointer"
          >
            <h2 class="font-bold text-xl text-center my-4">${data.name}</h2>
            <div class="my-2">
              <p>Height: ${data.height}cm</p>
              <p>
                Hair color: ${
                  data.hair_color == "n/a" ? "No tiene pelo" : data.hair_color
                }
              </p>
            </div>
            <div class="other my-2">
              <p
                class="text-center text-xs bg-slate-700 w-12 mx-auto rounded-3xl"
              >
                ${data.gender}
              </p>
            </div>
          </div>
      `;
    });
}
