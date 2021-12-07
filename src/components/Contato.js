import React from "react";
import styles from "./Contato.module.css";
import foto from "../img/contato.jpg";
import Head from "./Head";

const Contato = () => {
  return (
    <section className={`${styles.contato} animeLeft`}>
      <Head title="Projeto | Contato" description="Página de Contato" />
      <img src={foto} alt="contato" />
      <div className={styles.dados}>
        <h1>Entre em contato.</h1>
        <ul>
          <li>alguem@alguem.com</li>
          <li>+55 45 6789 0001</li>
          <li>Rua dos Lobos, 0</li>
        </ul>
      </div>
    </section>
  );
};

export default Contato;
