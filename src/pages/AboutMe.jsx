import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const AboutMe = () => {
  return (
    <section className="details-header">
      <Navbar />
      <Link to="/" className="goback">
        <button className="btn-voltar">Voltar</button>
      </Link>

      <main className="about-me">
        <h2 className="about-me-title">
          Bem-vindo ao meu projeto MyFavPokedex{" "}
        </h2>
        <p className="texto">
          Este projeto está sendo desenvolvido com muito carinho por mim mesma
          (Keila)! <br />
          Estou usando como principal tecnologia o React. Neste projeto pude
          aplicar conceitos como Context API e é a primeira vez que estou usando
          LocalStorage. Cada vez que um pokemon card for favoritado ele ficará
          salvo no seu navegador, mesmo que a página seja recarregada ou
          fechada, quando você retornar terá todos os dados salvos!
          <br />
          Além disso foram consumidos os dados da Rest API (PokeAPI) e confesso
          que estou ficando craque nesse quesito! Aproveitei para aperfeiçoar
          meus conhecimentos em rotas e decidi adicionar uma página de detalhes
          para cada pokemon selecionado. Tá ficando legal né? Ainda estou
          aplicando a responsividade para que a página seja acessível em todos
          os tipos de tela, então fica atento que se tá legal vai ficar ainda
          melhor!
        </p>
      </main>
    </section>
  );
};

export default AboutMe;
