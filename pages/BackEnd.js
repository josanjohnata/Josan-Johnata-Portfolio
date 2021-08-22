import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function BackEnd() {
  return (
    <div>
      <Header />
      <section>
        <div>
          <div>
            <div>
              <h2>Back-end</h2>
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
            <a href="https://github.com/douglas-he/back-end/tree/master/project-cookmaster">
              Cookmaster
            </a>
            <a href="https://github.com/douglas-he/back-end/tree/master/a-cli-of-ice-and-fire">
              A CLI of Ice and Fire
            </a>
            <a href="https://github.com/douglas-he/back-end/tree/master/mongodb-aggregations">
              Aggregations
            </a>
            <a href="https://github.com/douglas-he/back-end/tree/master/mongodb-commerce">
              MongoDB Commerce
            </a>
            <a href="https://github.com/douglas-he/back-end/tree/master/mongodb-dataflights">
              DataFlights
            </a>
            <a href="https://github.com/douglas-he/back-end/tree/master/mysql-all-for-one">
              All For One
            </a>
            <a href="https://github.com/douglas-he/back-end/tree/master/mysql-vocabulary-booster">
              Vocabulary Booster
            </a>
            <a href="https://github.com/douglas-he/back-end/tree/master/project-one-for-all">
              One For All
            </a>
            <a href="https://github.com/douglas-he/back-end/tree/master/project-queries-unite">
              Queries Unite
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default BackEnd;
