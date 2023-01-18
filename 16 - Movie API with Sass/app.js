console.clear();
const moviesContainer = document.querySelector(".container");

const createCards = (movie, rate, path) => {
  const intRate = parseInt(rate);
  let stars = "";
  switch (intRate) {
    case 5:
      stars = ` 
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star-half-stroke"></i>
      <i class="fa-regular fa-star"></i>
      <i class="fa-regular fa-star"></i>
      `;
      break;
    case 6:
      stars = ` 
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-regular fa-star"></i>
      <i class="fa-regular fa-star"></i>
      `;
      break;
    case 7:
      stars = ` 
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star-half-stroke"></i>
      <i class="fa-regular fa-star"></i>
      `;
      break;
    case 8:
      stars = ` 
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-regular fa-star"></i>
      `;
      break;
    case 9:
      stars = ` 
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star-half-stroke"></i>
      `;
      break;
    case 10:
      stars = ` 
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      `;
      break;

    default:
      stars = `
        <i class="fa-regular fa-star"></i>
        <i class="fa-regular fa-star"></i>
        <i class="fa-regular fa-star"></i>
        <i class="fa-regular fa-star"></i>
        <i class="fa-regular fa-star"></i>
      `;
      break;
  }

  let moviePoster = "";
  path != null
    ? (moviePoster = `https://image.tmdb.org/t/p/w500//${movie.poster_path}`)
    : (moviePoster = `styles/assets/Not_Found_logo-removebg.png`);

  return `
      <!-- Card -->
      <div class="card">
        <img src="${moviePoster}" alt="${movie.original_title}.">
        <h1 class="movieTitle">${movie.original_title}</h1>
        <section class="rateSection">
          <h4 class="rating">Rate: </h4>
          <div class="stars">
            <div class="votes">
              <h6 class="votesCount">( ${movie.vote_count} )</h6>
              ${stars}
            </div>
          </div>
        </section> 
        <section class="summary">
          <details>
            <summary>SUMMARY</summary>
              ${movie.overview}
          </details>
        </section>
        <section class="card-bottom">
          <button><a href="https://www.youtube.com/">▶ WATCH TRAILER</a></button>
          <div>
            <i class="fas fa-save"></i>
            <i class="fas fa-download"></i>
            <i class="fas fa-share-alt"></i>
          </div>
        </section>
      </div>
      <!-- End of this HTML card -->
    `;
};

const prevBtn = document.querySelector("#prevPage");
const nextBtn = document.querySelector("#nextPage");
const pageNum = document.querySelector("#pageNum");

let pageNumber = 1;

prevBtn.addEventListener("click", () => {
  if (pageNumber == 1) {
    console.log("This already is the first page.");
  } else if (pageNumber > 0) {
    pageNumber--;
    pageNum.textContent = `${pageNumber} / 33578+`;

    moviesContainer.innerHTML = getMovieData();
  }
});

nextBtn.addEventListener("click", () => {
  if (pageNumber < 9999) {
    pageNumber++;
    pageNum.textContent = `${pageNumber} / 33578+`;

    moviesContainer.innerHTML = getMovieData();
  }
});

const getMovieData = async () => {
  try {
    const responseMovies = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=24853442298977a0118226709d68cfa8&language=en-US&page=${pageNumber}`
    );
    if (responseMovies.status === 200) {
      const dataMovies = await responseMovies.json();
      const allData = dataMovies.results;

      let templateMovies = "";

      allData.map((eachMovie) => {
        templateMovies += createCards(
          eachMovie,
          eachMovie.vote_average,
          eachMovie.poster_path
        );
      });
      moviesContainer.innerHTML = templateMovies;
    } else if (responseMovies.status === 401) {
      console.log(`The API key is wrong.\nVerify it`);
    } else if (responseMovies.status === 404) {
      console.log(`Your search does not exist in the database.`);
    } else {
      console.log("Something gone wrong...\nCommunicate it to the developer. ");
    }
  } catch (error) {
    alert(error);
  }
};

getMovieData();
