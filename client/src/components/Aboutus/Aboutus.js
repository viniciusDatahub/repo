import "./Style.css";
import NavbarPublic from "../../layouts/NavbarPublic/NavbarPublic";
import Footer from "../../layouts/Footer/Footer";

function Aboutus() {
  return (
    <div className="aboutus">
      <NavbarPublic />
      <div className="aboutus-text-container">
      <h2>Quem somos</h2>
      <p className="aboutus-text">
        O <b>Repo</b> nasceu depois que nosso fundador, o Vinícius, percebeu que
        indicações de verdadeiros tesouros literários eram perdidas no excesso
        de informações, stories e posts nas redes sociais. O que era apenas um
        repositório pessoal de livros a serem lidos, tornou-se uma plataforma de
        indicações de leituras. 
        <br/>
        <br/>
        Aqui você encontra indicações de leituras feitas
        pelas pessoas que você admira – com tantas opções <s>duvidosas</s> por aí, uma
        recomendação é sempre bem-vinda. <br/><br/>
        Nossa proposta NÃO é sermos um guia ou lista de leitura obrigatória para ninguém. <br/><br/>
        Nosso objetivo é facilitar as indicações, fazer com que elas não se percam no 
        mar de stories e feeds e, quem sabe, que elas acessem os leitores 
        que não estão nas redes sociais.
      </p>
      </div>
      <Footer />
    </div>
  );
}

export default Aboutus;
