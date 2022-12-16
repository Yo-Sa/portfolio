import { Profile } from "./Profile";
import { Header } from "./Header";
import { Skill } from "./Skill";
import { Work } from "./Work";
import { Fotter } from "./Fotter";
import { Information } from "./Information";


export const Home = () => {
    return (
        <div>
            <Header />
            <Profile />
            <Skill />
            <Work />
            <Information />
            <Fotter />
        </div>
    );
};