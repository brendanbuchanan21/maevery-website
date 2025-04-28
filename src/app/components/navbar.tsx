import maeveryLogo from '../images/maevery-logo.png';
import Image from 'next/image';

export default function NavBar() {

    return (
        <header>
            <Image  src={maeveryLogo} alt='Maevery Logo' className='logo'/>
            <nav>
                <ul>
                    <li>HOME</li>
                    <li>MEET MAVERY</li>
                    <li>MENU</li>
                    <li>FIND US</li>
                </ul>
            </nav>
        </header>
    )
}