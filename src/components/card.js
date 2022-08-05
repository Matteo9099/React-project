import React, { Component } from 'react';


class Card extends Component {
    render()  {
        return(
            <div className="col d-flex justify-content-center">
                <div className="card" style={{ width: '18rem', textAlign: 'center' }}>
                    <button onClick={() => this.props.onDelete(this.props.card.id)} className="btn btn-outline-danger">Elimina</button>
                    <img src={ this.props.card.image } className="card-img-top" alt={ this.props.card.name } />
                    <div className="card-body">
                        <h5 className="card-title border-bottom pb-1">{ this.props.card.name }</h5>
                        <p className="card-text">{ this.props.card.description }</p>
                        <p className="card-text">&euro;{ this.props.card.price }</p>
                        <div className='d-flex justify-content-around'>
                            <button onClick={() => this.props.onIncrement(this.props.card)} className="btn btn-outline-success">
                                <i class="fa-solid fa-plus"></i><span className='badge bg-light text-dark ms-2'>{ this.props.card.qnt }</span>
                            </button>
                            <button onClick={() => this.props.onDecrement(this.props.card)} className="btn btn-outline-warning">
                                <i class="fa-solid fa-minus"></i><span className='badge bg-light text-dark ms-2'>{ this.props.card.qnt }</span>
                            </button>
                            <button onClick={() => this.props.onReset(this.props.card)} className="btn btn-outline-danger">
                                <i class="fa-solid fa-circle-xmark"></i><span className='badge bg-light text-dark ms-2'>{ this.props.card.qnt }</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;