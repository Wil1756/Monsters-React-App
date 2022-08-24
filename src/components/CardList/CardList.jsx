import React, { Component } from 'react';
import Card from '../Card/Card';
import '../CardList/CardList.styles.css';


class CardList extends Component {
    render() {
        return (
            <div className='card-list '>
                {this.props.monsters.map(monster => {
                    return <Card monster={monster} />
                })}
            </div>
        );
    }
}

export default CardList;