import Arrow from '../../assets/images/Arrow 1.png'
import {Image} from '../common/Image';
import {Button} from '../common/Button'
const Banner: React.FC<any> = ({secondary,reverse,tertiary,image,btnText}) => {
    return (
        <>
            <div className={`banner ${reverse ? "banner-reverse" : ""} ${tertiary ? "banner--tertiary" : ""}`}>
                <div className={`banner__content ${secondary ? "banner__content--secondary" : ""} ${tertiary ? "banner__content--tertiary" : ""}`}>
                    <h1 className={`banner__title ${secondary ? "banner__title--secondary" : ""} ${tertiary ? "banner__title--tertiary" : ""}`}>
                        Building digital products, brands & experience
                    </h1>
                    <p className={`banner__text ${secondary ? "banner__text--secondary" : ""} ${tertiary ? "banner__text--tertiary" : ""}`}>
                        Digital Agency is your online team mangement tool that easy and prompt
                    </p>
                    <Button secondary={secondary}>
                        {btnText ? btnText : <Image src={Arrow} alt="arrow" className="arrow"/>}
                    </Button>
                </div>
                <Image src={image.src} alt={image.alt}/>
            </div>
        </>
    )
}

export default Banner;