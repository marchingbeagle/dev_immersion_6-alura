let playerList = [
  {
    nome: "Paulo",
    vitoria: 0,
    empate: 0,
    derrota: 0,
    pontos: 0,
  },
  {
    nome: "Rafa",
    vitoria: 0,
    empate: 0,
    derrota: 0,
    pontos: 0,
  },
  {
    nome: "Erik",
    vitoria: 0,
    empate: 0,
    derrota: 0,
    pontos: 0,
  },
  {
    nome: "Ana",
    vitoria: 0,
    empate: 0,
    derrota: 0,
    pontos: 0,
  },
  {
    nome: "Joao",
    vitoria: 0,
    empate: 0,
    derrota: 0,
    pontos: 0,
  },
];

let elementTable = document.getElementById("tabelaJogadores");

function clearTable() {
  elementTable.innerHTML = "";
}

function printPlayers() {
  let playerListSorted = sortPlayers();

  const printPlayersHTML = playerListSorted.forEach((element, index) => {
    let playerIndex = index;
    console.log(playerListSorted);
    elementTable.innerHTML += `
      <tr>
        <td>${element.nome}</td>
        <td>${element.vitoria}</td>
        <td>${element.empate}</td>
        <td>${element.derrota}</td>
        <td>${element.pontos}</td>
        <td><button onClick="adicionarVitoria(${playerIndex})">Vitória</button></td>
        <td><button onClick="adicionarEmpate(${playerIndex})">Empate</button></td>
        <td><button onClick="adicionarDerrota(${playerIndex})">Derrota</button></td>
      </tr>
      `;
  });
}

printPlayers();

function adicionarVitoria(element) {
  clearTable();
  playerList[element].vitoria++;
  playerList[element].pontos += 3;
  printPlayers();
}

function adicionarEmpate(element) {
  clearTable();
  playerList[element].empate++;
  printPlayers();
}

function adicionarDerrota(element) {
  clearTable();
  playerList[element].derrota++;
  printPlayers();
}

function addNewPlayer() {
  let flag = 0;
  let playerName = document.getElementById("newPlayerName").value;

  playerList.forEach((element) => {
    if (playerName == element.nome) {
      alert("Nome ja incluso");
      flag = 2;
    }
  });

  if (flag == 0 && !playerName == "") {
    playerList.push({
      nome: playerName,
      vitoria: 0,
      empate: 0,
      derrota: 0,
      pontos: 0,
    });
  }
  clearTable();
  printPlayers();
}

function sortPlayers() {
  const playerListSorted = playerList.sort((a, b) => {
    if (a["pontos"] > b["pontos"]) {
      return -1;
    }
    if (a["pontos"] < b["pontos"]) {
      return 1;
    }
    return 0;
  });
  return playerListSorted;
}
