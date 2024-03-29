import CoreConcept from "./coreconcepts";
import {CORE_CONCEPTS} from "../data";
import telegramIcon from '../assets/telegram_icon.png'
import whatsappIcon from '../assets/whatsapp_icon.png'

export default function Contacts() {
    return <>
        <section id="contacts">
            <h2>Contacts</h2>
            {/*<div id="tab-content">*/}
            {/*    <pre>*/}
            {/*        <h1>Hello World</h1>*/}
            {/*    </pre>*/}
            {/*</div>*/}

        </section>
        <section id="core-concepts">

            {/*<h2>Core Concepts</h2>*/}
            <ul>
                <CoreConcept
                    title='Telegram'
                    // description={CORE_CONCEPTS[0].description}
                    image={telegramIcon}
                />
                <CoreConcept
                    title='Whatsup'
                    // description={CORE_CONCEPTS[0].description}
                    image={whatsappIcon}
                /><CoreConcept
                    title='Telegram Group'
                    // description={CORE_CONCEPTS[0].description}
                    image={telegramIcon}/>
                {/*<CoreConcept {...CORE_CONCEPTS[1]} />*/}
                {/*<CoreConcept {...CORE_CONCEPTS[2]} />*/}
                {/*<CoreConcept {...CORE_CONCEPTS[3]} />*/}
            </ul>
            <h2> Tel: +82-010-9922-1601</h2>
        </section>
    </>

}