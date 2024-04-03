let container = document.querySelector(".container");

async function getMovieData(page = 1) {
  let count = ``;
  if (page < 1) {
    page = 1;
  }
  let req = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=25cb3584002cde964aa80c9ad2c3b76f&page=${page}`
  );
  let data = await req.json();
  let movieData = await data.results;
  for (let i = 0; i < movieData.length; i++) {
    count += ` <div class="card" onClick="navigeatPage(${movieData[i].id})">
          <img src="https://image.tmdb.org/t/p/w500${
            movieData[i].poster_path
          }" class="w-100" alt="">
          <p>${movieData[i].title}</p>
          <span><i class="fa-solid fa-star"></i> ${movieData[
            i
          ].vote_average.toFixed(1)}</span>
          </div>`;
  }
  container.innerHTML = count;
  document.querySelector(
    ".paginations"
  ).innerHTML = ` <nav aria-label="Page navigation example ">
  <ul class="pagination justify-content-center">
    <li onClick="getMovieData(${
      data.page - 1
    } )" class="page-item"><a class="page-link" href="#">Previous</a></li>
    <li onClick="getMovieData(${
      data.page
    })" class="page-item"><a class="page-link" >${data.page}</a></li>
    <li onClick="getMovieData(${
      data.page + 1
    })" class="page-item"><a class="page-link" >${data.page + 1}</a></li>
    <li onClick="getMovieData(${
      data.page + 2
    } )" class="page-item"><a  class="page-link" >${data.page + 2}</a></li>
    <li onClick="getMovieData(${
      data.page + 1
    } )" class="page-item"><a class="page-link" href="#">Next</a></li>
  </ul>
  </nav>`;
}

getMovieData();

function navigeatPage(id) {
  window.location.href = `./components/movieDetials/movieDetials.html?id=${id}`;
}
