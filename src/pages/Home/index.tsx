import {Banner,Company,Discuss} from '../../components/home'
import PrimaryBannerImg from '../../assets/images/business-people-discussing-business-idea.png'
import SecondaryBannerImg from '../../assets/images/designer-team-working-on-creative-design.png'
import TertiaryBannerImg from '../../assets/images/businessman-analyzing-data.png'
import QuaternaryBannerImg from '../../assets/images/customer-support.png'

const Home : React.FC = () => {
    return (
        <>
            <Banner image={{src : PrimaryBannerImg,alt:"Primary banner image"}} btnText="Contact Us"/>
            <Company />
            <Banner secondary reverse image={{src : SecondaryBannerImg,alt:"Secondary banner image"}} />
            <Banner secondary image={{src : TertiaryBannerImg,alt:"Tertiary banner image"}} />
            <Discuss />
            <Banner secondary tertiary reverse image={{src : QuaternaryBannerImg,alt:"Quaternary banner image"}}/>
        </>
    )
}

export default Home;