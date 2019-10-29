import React from 'react';
import Card from './Card';
import artImgsArr from './art_imgs';
import designImgsArr from './design_imgs';
import linkImgsArr from './link_imgs';
import './CardContainer.css';

const CardContainer = ({category}) => {
    const artCards = artImgsArr.map( (card, i) => {
        return <Card key= {i} type={'art'} src={card} />
    });

    const designCards = designImgsArr.map ( (card, i) => {
        return <Card key={i} type={'design'} src={card} />
    });

    const linkCards = linkImgsArr.map((card, i) => {
        return <Card key={i} type={'link'} src={card[0]} link={card[1]} text={card[2]} />
    });

    const allCards = [...artCards, ...designCards, ...linkCards];

    switch(category){
        case 'art':
            return (
                <section className="container">
                    {artCards}
                </section>     
            )
        case 'design':
            return (
                <section className="container">
                    {designCards}
                </section>
            )
        case 'all':
            return (
                <section className="container">
                    {allCards}
                </section>
            )
        default:
            console.log(category);
            return (
                <section className="container">
                    {linkCards}
                </section>
            )
    }


    
}

export default CardContainer;