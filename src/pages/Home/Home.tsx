import iconUsersPng from '@/assets/icons/users.png';
import iconUsersJpg from '@/assets/icons/users.jpg';
import IconUsersSvg from '@/assets/icons/users.svg';
import {useEffect} from "react";

export const Home = () => {
    return (
        <div className={'home'}>
            <h1 data-test-id={'HomePageTitle'}>Home Page</h1>
            <h2>Обработка иконок лоадером</h2>
            <img height={100} src={iconUsersPng} alt=""/>
            <img height={100} src={iconUsersJpg} alt=""/>
            <IconUsersSvg
                height={100}
                width={100}
                color={'red'}
            />
            MODE={__MODE__}
        </div>
    );
};
