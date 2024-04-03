const id = new URLSearchParams(window.location.search).get("id");
let container = document.querySelector(".container");

async function getMovieDetails() {
  let count = ``;
  let req = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=25cb3584002cde964aa80c9ad2c3b76f`
  );
  let data = await req.json();

  container.innerHTML = ` <div class="picture">
    <img src="https://image.tmdb.org/t/p/w300${data.poster_path}" alt="" />
    </div>
    <div class="info">
    <h2 class="my-3">${data.title}</h2>
    <p class="my-3">${data.overview}</p>
    <div class="button"> <button class="btn btn-success my-3">install</button>
    <span class="my-3"> <i class="fa-solid fa-star"></i> ${data.vote_average.toFixed(
      2
    )}</span></div>
    </div>`;
}

getMovieDetails();
