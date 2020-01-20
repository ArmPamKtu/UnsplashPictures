import React from 'react';
import './images.scss';

interface IImiges {
    mappedImages: any;
}

const Images = (props: IImiges) => {

    return (
        <div className="image-container">
            { 
                props.mappedImages.length === 0 ?
                
                <span className="image-container__message">No results found</span>
                
                :
                props.mappedImages.map( (image : any) => {
                    return (
                    <div key={image.id} className="image-container__wrapper" tabIndex={0}>
                        <div className="image-container__image-wrapper">
                            <img src={image.src} alt={image.alt} className="image-container__image"/>
                        </div>
                        <p className="image-container__text">Photographer: {image.owner}</p>
                        <a className="image-container__link" href={image.referralLink} target="_blank" rel="noopener noreferrer">View profile</a>
                    </div>
                    )
                })
            }
        </div>
    )
}

export default Images;