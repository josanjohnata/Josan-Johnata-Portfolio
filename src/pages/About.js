import React from "react";
import Header from '../components/Header';
import Footer from '../components/Footer';

function About() {
  return (
    <div>
      <Header />
      <section>
        <div>
          <div >
            <div>
              <h2>Sobre Mim</h2>
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
            <div>
              <div>
                <img src="img/about-us.png" alt="" />
              </div>
            </div>

            <div>
              <div>
                <h2>
                  {" "}
                  Vamos a uma
                  <br />
                  Introdução sobre <br />
                  mim
                </h2>
                <p>
                  Me chamo Johnata, tenho 29 anos, apreciado de café, amante de
                  cachorros grandes e atualmente sou estudante de Segurança da
                  Informação na UNIASSELVI e de Desenvolvimento de Software na
                  Trybe.
                </p>
                <p>
                  Já estando próximo a minha formação, busco por oportunidades
                  de iniciar minha carreira como desenvolvedor, e adquirir ainda
                  mais conhecimento em tecnologias diversas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default About;
