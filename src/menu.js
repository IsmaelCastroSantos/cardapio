import enroladinhoMignonImg from "./assets/dishes/enroladinho-mignon.jpeg";
import casal20Img from "./assets/dishes/casal-20.jpeg";
import burguerPicanhaImg from "./assets/dishes/burguer-picanha.jpeg";
import fishChipsImg from "./assets/dishes/fish-chips.jpeg";
import risotoCamaraoTrufadoImg from "./assets/dishes/risoto-camarao-trufado.jpeg";

import brownieImg from "./assets/desserts/brownie.jpeg";
import cocadaFornoImg from "./assets/desserts/cocada-forno.jpeg";
import petitGateauImg from "./assets/desserts/petit-gateau.jpeg";

import aguaSemGasImg from "./assets/drinks/agua-sem-gas.jpeg";
import aguaComGasImg from "./assets/drinks/agua-com-gas.jpeg";
import cocaColaImg from "./assets/drinks/coca-cola.jpeg";
import guaranaImg from "./assets/drinks/guarana.jpeg";
import heinekenImg from "./assets/drinks/heineken.jpeg";

export const enroladinhoMignon = {
  name: "Enroladinho de Mignon",
  price: "R$ 64,90",
  image: enroladinhoMignonImg,
  description: "Finíssimas fatias de filé mignon enroladas no parmesão",
};
const casal20 = {
  name: "Casal 20",
  price: "R$ 29,00",
  image: casal20Img,
  description: "Casal perfeito pão de alho caseiro e linguiça toscana grill",
};
const burguerPicanha = {
  name: "Burguer de Picanha",
  price: "R$ 44,90",
  image: burguerPicanhaImg,
  description:
    "Burguer de Picanha Angus, Queijo Cheddar, Crisp de Cebola e Geléia de Bacon",
};
const fishChips = {
  name: "Fish and Chips",
  price: "R$ 79,90",
  image: fishChipsImg,
  description:
    "Iscas de Peixe Empanada na Farinha Panko e Flocos de Milho e Batata Frita Palito",
};
const risotoCamaraoTrufado = {
  name: "Risoto de Camarão Trufado",
  price: "R$ 72,90",
  image: risotoCamaraoTrufadoImg,
  description:
    "Arroz Arbóreo, camarões salteados no azeite trufado e crocantes de panko",
};

const brownie = {
  name: "Brownie",
  price: "R$ 32,90",
  image: brownieImg,
  description:
    "Delicioso brownie caseiro, sorvete de creme, calda quente de chocolate",
};
const cocadaForno = {
  name: "Cocada de Forno",
  price: "R$ 32,90",
  image: cocadaFornoImg,
  description:
    "Cremosa cocada de coco torrado, doce de leite argentino e sorvete de creme",
};
const petitGateau = {
  name: "Petit Gateau",
  price: "R$ 34,90",
  image: petitGateauImg,
  description:
    "Bolo quente recheado com ganache de chocolate, leite condensado e castanha de caju",
};

const aguaSemGas = {
  name: "Água sem gás",
  price: "R$ 6,90",
  image: aguaSemGasImg,
  description: "310ml",
};
const aguaComGas = {
  name: "Água com gás",
  price: "R$ 7,90",
  image: aguaComGasImg,
  description: "310ml",
};
const cocaCola = {
  name: "Coca-Cola",
  price: "R$ 7,90",
  image: cocaColaImg,
  description: "290ml",
};
const guarana = {
  name: "Guaraná Antártica",
  price: "R$ 7,90",
  image: guaranaImg,
  description: "350ml",
};
const heineken = {
  name: "Heineken",
  price: "R$ 15,90",
  image: heinekenImg,
  description: "355ml",
};

export const mainDishes = [
  burguerPicanha,
  enroladinhoMignon,
  casal20,
  fishChips,
  risotoCamaraoTrufado,
];

export const desserts = [brownie, cocadaForno, petitGateau];

export const drinks = [aguaSemGas, aguaComGas, cocaCola, guarana, heineken];
