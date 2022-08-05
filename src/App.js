import NavBar from "./components/NavBar";
import Card from "./components/card";
import React, { Component } from "react";

import avocado_cotto from './images/avocado_cotto.jpg';
import mozzarellaCarrozza from './images/mozzarellaCarrozza.jpg';
import focacciaGenovese from './images/focacciaGenovese.jpg';
import panzerotti from './images/panzerotti.jpeg';
import impepataDiCozze from './images/impepataDiCozze.jpg';
import arancino from './images/arancino.jpg';
import polpette from './images/polpette.jpg';
import cozze_tarantina from './images/cozze_tarantina.jpg';

class App extends Component {
  state = { 
    cards: [
      { id: 0, name: 'Prosciutto crudo e avocado', description: "L'antipasto crudo e avocado è un raffinato finger food, l'accompagnamento perfetto agli immancabili brindisi con le tradizionali bollicine.", price: 12, image: avocado_cotto, qnt: 0 },
      { id: 1, name: 'Mozzarella in carrozza', description: "La mozzarella in carrozza è una ricetta della tradizione napoletana, composta da fette di pane in cassetta dal ripieno di filante mozzarella.", price: 10, image: mozzarellaCarrozza, qnt: 0 },
      { id: 2, name: 'Focaccia (fügassa) alla genovese', description: "La focaccia alla genovese, in dialetto fügassa, è una specialità tipica della cucina ligure ed è diventata un presidio Slow Food.", price: 6.50, image: focacciaGenovese, qnt: 0 },
      { id: 3, name: 'Panzerotti (calzoni) fritti', description: "I panzerotti, o calzoni, fritti sono tipici della cucina pugliese, pasta lievitata farcita con mozzarella e pomodoro e infine fritta! Buonissimi!", price: 7, image: panzerotti, qnt: 0 },
      { id: 4, name: 'Arancini di riso',description: "Gli arancini di riso, vanto della cucina siciliana, sono piccoli timballi di riso farciti, uno street food sfizioso e saporito!", price: 4.5, image: arancino, qnt: 0 },
      { id: 5, name: 'Impepata di cozze',description: "L'impepata di cozze è una ricetta tipica della cucina campana realizzata con due soli ingredienti, ottima come antipasto: scopri dosi e preparazione!", price: 9, image: impepataDiCozze, qnt: 0 },
      { id: 6, name: 'Polpette di melanzane',description: "Le polpette di melanzane sono uno sfizioso finger food, perfetto da servire come antipasto o per arricchire il vostro buffet. Scoprite qui la…", price: 6.5, image: polpette, qnt: 0 },
      { id: 7, name: 'Cozze alla tarantina', description: "Le cozze alla tarantina sono un piatto tipico della cucina pugliese a base di cozze e insaporite da salsa di pomodoro.", price: 9, image: cozze_tarantina, qnt: 0 },
  ] }


  // ELIMINARE UN PRODOTTO
  handleDelete = cardId => {
    const cards = this.state.cards.filter(card => card.id !== cardId)
    this.setState({ cards });
  }

  // AGGIUNGERE UN  PRODOTTO AL CARRELLO
  handleIncrement = card => {
    const cards = [...this.state.cards];
    const id = cards.indexOf(card);
    cards[id] = { ...card };
    cards[id].qnt++;
    this.setState({ cards });
  }

  // RIMUOVERE UN  PRODOTTO DAL CARRELLO
  handleDecrement = card => {
    const cards = [...this.state.cards];
    const id = cards.indexOf(card);
    cards[id] = { ...card };
    if(cards[id].qnt > 0) cards[id].qnt--;
    this.setState({ cards });
  }

  // RESETTARE TUTTI I VALORI
  handleReset = card => {
    const cards = [...this.state.cards];
    const id = cards.indexOf(card);
    cards[id] = { ...card };
    cards[id].qnt=0;
    this.setState({ cards });
  }

  render(){
    return (
      <>
        <NavBar />
        <div className="container">
          <h1 className="text-center">Antipasti</h1>
          <hr></hr>
          <div className="row d-flex flex-nowrap ms_overflow pb-3">
              { this.state.cards.map(card =>(
                <Card
                key={card.id} 
                onDelete={this.handleDelete}
                onIncrement={this.handleIncrement}
                onDecrement={this.handleDecrement}
                onReset={this.handleReset}
                card={card}
                />
              )) }
          </div>
        </div>
      </>
    );
  }
}

export default App;
