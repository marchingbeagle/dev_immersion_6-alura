const movieStorage = [{}];

function clearInput() {
  document.getElementById("movie").value = "";
}

function addToStorage() {
  let movieInput = document.getElementById("movie").value;
  movieStorage.push("{title:" + movieInput + ",},");
}

function addMovie() {
  let movieInput = document.getElementById("movie").value;
  let movieList = document.getElementById("movieList");

  if (movieInput.startsWith("https")) {
    movieList.innerHTML +=
      "<img class = 'moviesDisplayed' src=" + movieInput + ">";
    addToStorage();
    clearInput();
  } else {
    alert("Endereço invalido, por favor tente novamente");
  }
}
