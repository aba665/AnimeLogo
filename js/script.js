var capafundo = document.getElementById("capa")
var nomeanime = document.querySelector(".nomecapa")
var descrianime = document.querySelector(".descricapa")
var indexPagina = 0
const collectionAnimes = [
    {nome: "Kimetsu no Yaiba", sobre: "Tanjiro Kamado é um garoto gentil que trabalha duro vendendo carvão para sustentar sua mãe e seus irmãos, tendo assim uma rotina tranquila e simples. Porém, o que era para ser uma comum noite se torna o pesadelo de Tanjiro, e sua família é massacrada e morta por demônios, que dentro da narrativa são intitulados onis.", src: "url(./image/demoncapa.png)"},
    {nome: "Nanatsu No Taizai", sobre: "O mangá apresenta um cenário semelhante ao da Idade Média Europeia, com um grupo principal de cavaleiros que representam os sete pecados capitais. Tendo como o principal personagem do mangá o Meliodas , o líder dos Sete Pecados Capitais, carregando o título de Pecado da Ira do Dragão. Ele é o proprietário do renomado bar Chapéu de Javali, e o principal protagonista da série.", src: "url(./image/nanatsucapa.jpg)" },
    {nome: "One Punch Man", sobre: "One Punch-Man conta a história de Saitama, um super-herói extremamente poderoso, que se entediou com a ausência dos desafios nas suas lutas contra o mal e procura encontrar um oponente digno.", src: "url(./image/onepunchcapa.jpeg)" },
    {nome: "Attack On Titan", sobre: "A história gira em torno de Eren Jaeger e seus amigos Mikasa Ackerman e Armin Arlet, que vivem em um mundo onde sofrem os ataques dos titãs, seres de grande altura (3 a 15 metros aproximadamente), cujo único objetivo é devorar os humanos.", src: "url(./image/ataquecapa.jpeg)" },
    {nome: "Tokyo Ghoul", sobre: "A história de Tokyo Ghoul segue Ken Kaneki, que mal sobrevive um encontro mortal com Rize Kamishiro, uma mulher que se revela ser um Ghoul, uma criatura semelhante à humana que caça e devora carne humana, e é levado para o hospital em estado crítico.", src: "url(./image/ghoulcapa.jpeg)" },
    {nome: "Dragon Ball Z", sobre: "Ele narra as lutas de um guerreiro Saiyajin chamado Son Goku e de seus amigos para protegerem o universo. Enquanto o mangá é completamente chamado de Dragon Ball, o anime foi divido de acordo com a idade de Goku, Dragon Ball mostra Goku a infância e adolescência de Goku, Dragon Ball Z é a segunda parte, onde o protagonista já está adulto.", src: "url(./image/dragoncapa.jpeg)" },
    {nome: "Death Note", sobre: "Na história, o Death Note é um caderno, normalmente de capa preta, e que tem seu nome escrito na parte frontal dele. Esse caderno tem a capacidade de matar qualquer pessoa", src: "url(./image/deathcapa.jpeg)" },
    {nome: "Fairy Tail", sobre: "Lucy Heartfilia é uma jovem maga de 17 anos que deseja tornar-se uma maga evoluída. Para isso, ela terá que entrar em uma guilda de magos, para ganhar dinheiro para sobreviver e também para aprimorar suas habilidades. Assim sendo, ela chega até a cidade de Hargeon, onde encontra Natsu Dragneel e Happy.", src: "url(./image/tailcapa.jpeg)" },
    {nome: "Naruto", sobre: "Doze anos antes do início da série, a Raposa Demônio de Nove-Caudas atacou Konohagakure destruindo grande parte da vila e tirando muitas vidas. O líder da aldeia, o Quarto Hokage sacrificou sua vida para selar o Nove-Caudas em um recém-nascido, Naruto Uzumaki.", src: "url(./image/narutocapa.jpeg)" },
    {nome: "One Piece", sobre: "One Piece é um anime que conta a história do jovem Monkey D. Luffy, que ganhou poderes de borracha depois de comer uma fruta do diabo. O enredo mostra as aventuras de Luffy e seu grupo, Os Piratas de Chapéu de Palha, em busca do One Piece, o tesouro mais procurado do mundo.", src: "url(./image/onecapa.png)" }

]

loaderPagina(indexPagina)

function item1(){
    indexPagina = 0
    loaderPagina(indexPagina)
    capafundo.style.backgroundImage = collectionAnimes[indexPagina].src
}
function item2(){
    indexPagina = 1
    loaderPagina(indexPagina)
    capafundo.style.backgroundImage = collectionAnimes[indexPagina].src
}
function item3(){
    indexPagina = 2
    loaderPagina(indexPagina)
    capafundo.style.backgroundImage = collectionAnimes[indexPagina].src
}
function item4(){
    indexPagina = 3
    loaderPagina(indexPagina)
    capafundo.style.backgroundImage = collectionAnimes[indexPagina].src
}
function item5(){
    indexPagina = 4
    loaderPagina(indexPagina)
    capafundo.style.backgroundImage = collectionAnimes[indexPagina].src
}
function item6(){
    indexPagina = 5
    loaderPagina(indexPagina)
    capafundo.style.backgroundImage = collectionAnimes[indexPagina].src
}
function item7(){
    indexPagina = 6
    loaderPagina(indexPagina)
    capafundo.style.backgroundImage = collectionAnimes[indexPagina].src
}
function item8(){
    indexPagina = 7
    loaderPagina(indexPagina)
    capafundo.style.backgroundImage = collectionAnimes[indexPagina].src
}
function item9(){
    indexPagina = 8
    loaderPagina(indexPagina)
    capafundo.style.backgroundImage = collectionAnimes[indexPagina].src
}
function item10(){
    indexPagina = 9
    loaderPagina(indexPagina)
    capafundo.style.backgroundImage = collectionAnimes[indexPagina].src
}
function loaderPagina(index){
    nomeanime.textContent = collectionAnimes[index].nome
    descrianime.textContent = collectionAnimes[index].sobre
   

}
