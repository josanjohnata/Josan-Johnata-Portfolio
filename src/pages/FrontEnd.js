import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function FrontEnd() {
  return (
    <div>
      <Header />
      <section>
        <div>
          <div>
            <div>
              <h2>Front-end</h2>
              <div>
                <a href="index.html">Home</a>
                <a href="about.html">Sobre</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div>
          <div>
            <h2>React</h2>
            <a href="https://douglas-he.github.io/Movie-Card-Library-Crud/">
              Movie Card Library Crud
            </a>
            <a href="https://douglas-he.github.io/Frontend-Online-Store/">
              Front-end Online Store
            </a>
            <a href="https://douglas-he.github.io/Starwars-Database-Redux/">
              StarWars Database Redux
            </a>
            <a href="https://douglas-he.github.io/Trivia/">Trivia</a>
            <a href="https://douglas-he.github.io/Starwars-Database-Context-Hooks/">
              StarWars Database Context and Hooks
            </a>
            <a href="https://douglas-he.github.io/recipes-app/">
              Recipes App - Design Mobile
            </a>
          </div>
          <div>
            <h2>Html-Css-Js</h2>
            <a href="https://douglas-he.github.io/Projetos/html-css/">
              Html-Css
            </a>
            <a href="https://douglas-he.github.io/Projetos/pixel-art/">
              Pixel Art
            </a>
            <a href="https://douglas-he.github.io/Projetos/todo-list/">
              Todo List
            </a>
            <a href="https://douglas-he.github.io/Projetos/Facebook-Sigin/">
              Facebook Sigin
            </a>
            <a href="https://douglas-he.github.io/Projetos/Profeta-Diario/">
              Profeta Diário
            </a>
            <a href="https://douglas-he.github.io/Projetos/Shopping-cart/">
              Shopping Cart
            </a>
            <a href="https://github.com/douglas-he/douglas-he.github.io/tree/master/Projetos/Unit-tests">
              Unit Tests
            </a>
            <a href="https://github.com/douglas-he/douglas-he.github.io/tree/master/Projetos/Zoo-Functions">
              Zoo Functions
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default FrontEnd;
