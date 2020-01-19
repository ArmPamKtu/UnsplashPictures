import React from 'react';

interface IImiges {
    mappedImages: any;
}

const Images = (props: IImiges) => {

    return (
        <div className="image-container">
            { 
                props.mappedImages.length == 0 ?
                <div> 
                    <span>No results found</span>
                </div>
                :
                props.mappedImages.map( (image : any) => {
                    return (
                    <div key={image.id}>
                        <div  className="image-container__wrapper">
                        <img src={image.src} className="image-container__image"/>

                        
                        </div>

                        
                        <p>Photographer: {image.owner}</p>
                        <a href={image.referralLink}>See profile</a>
                        <a href={image.downloadLink} download={image.jpg} target="_blank">Download the photo</a>
                    </div>
                    )
                })
            }
        </div>
    )
}

export default Images;