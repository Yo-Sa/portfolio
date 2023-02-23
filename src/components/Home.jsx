import { Profile } from "./Profile";
import { Header } from "./Header";
import { Skill } from "./Skill";
import { Work } from "./Work";
import { Footer } from "./Footer";
import { Information } from "./Information";
import { Menu } from "./Menu";


export const Home = () => {
    return (
        <div>
            <Menu/>
            <Header />
            <div className="wrapper">
            
                <Profile />
                <Skill />
                <Work />
                <Information />
            </div>
            <Footer />
        </div>
    );
    
};