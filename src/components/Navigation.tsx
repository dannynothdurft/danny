import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { RiMenuLine } from "@react-icons/all-files/ri/RiMenuLine";
import { AiOutlineClose } from "@react-icons/all-files/ai/AiOutlineClose";

import Logo from '@/images/Logo.png';

function Navigation() {

    const [aktiv, setAktiv] = useState<boolean>(false)

    const toggle = () => {
        setAktiv(!aktiv);
        console.log(aktiv)
    }

    return (
        <div className='Navigation-Componente'>
            <Link href="/">
                <Image src={Logo} width={50} height={50} alt="Danny Nothdurft Logo" className='DN-Logo' />
            </Link>
            <ul onClick={toggle} className={aktiv ? "aktive" : ""}>
                <li> <Link href="/">Home</Link> </li>
                <li> <Link href="/projects">Projekte</Link> </li>
                <li> <Link href="/contact">Kontakt</Link> </li>
            </ul>

            <button onClick={toggle} className="toggle">
                {aktiv ? <AiOutlineClose /> : <RiMenuLine />}
            </button>
        </div>
    )
}

export default Navigation;