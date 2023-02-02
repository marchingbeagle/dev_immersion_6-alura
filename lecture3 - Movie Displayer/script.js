let movieList = [
  {
    title: "Eu acredito",
    img: "https://capas-p.imagemfilmes.com.br/164847_000_p.jpg",
  },
  {
    title: "A hospedeira",
    img: "https://www.intrinseca.com.br/blog/wp-content/uploads/2013/02/capafilme_Ahospedeira.jpg",
  },
  {
    title: "Mulan",
    img: "https://m.media-amazon.com/images/I/91++nYXJ5dL.jpg",
  },
];

const printMovieImg = movieList.forEach((element) => {
  let div = document.write("<div>");
  let img = document.write("<img class='img' src=" + element.img + ">");
  let name = document.write("<p>" + element.title + "</p>");
  let divEnd = document.write("</div>");
  return div + img + name + divEnd;
});
