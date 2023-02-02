const movieStorage = [{}];

function addMovie() {
  let movieInput = document.getElementById("movie").value;
  let movieList = document.getElementById("movieList");

  if (movieInput.startsWith("https")) {
    movieList.innerHTML +=
      "<img class = 'moviesDisplayed' src=" + movieInput + ">";
    document.getElementById("movie").value = "";
    movieStorage.push("{title:" + movieInput + ",},");
  } else {
    alert("Endereço invalido, por favor tente novamente");
  }
}
