import Logo from '../../assets/images/Company logo.png'
import Logo1 from '../../assets/images/Company logo(1).png'
import Logo2 from '../../assets/images/Company logo(2).png'
import Logo3 from '../../assets/images/Company logo(3).png'
const Company: React.FC = () => {
    return (
        <>
            <div className="company">
                <p className="company__title">
                    Trusted by 4,000+ companies
                </p>
                <div className="company__list">
                    <img src={Logo} alt="logo company" className="company__item"/>
                    <img src={Logo1}  alt="logo company" className="company__item"/>
                    <img src={Logo2}  alt="logo company" className="company__item"/>
                    <img src={Logo3}  alt="logo company" className="company__item"/>

                </div>
            </div>
        </>
    )
}

export default Company;