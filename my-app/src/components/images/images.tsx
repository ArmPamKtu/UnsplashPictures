import React from 'react';
import './images.scss';

interface IImiges {
    firstLoad: boolean;
    mappedImages: any;
}

const Images = (props: IImiges) => {

    return (
        <div className="image-container">
            { 
                props.firstLoad ? 

                <span className="image-container__message">Type in your keywords to get photos</span>
                :

                props.mappedImages.length === 0 && props.firstLoad?
                
                <span className="image-container__message">No results found</span>
                :

                props.mappedImages.map( (image : any) => {
                    return (
                    <div key={image.id} className="image-container__wrapper" tabIndex={0}>
                        <div className="image-container__image-wrapper">
                            <img src={image.src} alt={image.alt} className="image-container__image"/>
                        </div>

                        {
                            image.description !== null ?
                            <p className="image-container__text">Description: {image.description}</p>
                            :
                            <p className="image-container__text">Photo does not have a description</p>
                        }
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