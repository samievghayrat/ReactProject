import {useState} from 'react';
import componentsImg from './assets/components.png';

import {CORE_CONCEPTS} from './data.js';
import Header from './components/Header.jsx';
// import CoreConcept from './components/CoreConcept.jsx';
import CoreConcept from './components/coreconcepts.jsx'
import TabButton from "./components/TabButtons";
import {EXAMPLES} from './data.js';
import Contacts from "./components/Contacts";

function App() {
    const [selectedTopic, setSelectedTopic] = useState('components');

    function handleSelect(selectedButton) {
        // selectedButton => 'components', 'jsx', 'props', 'state'
        setSelectedTopic(selectedButton);
        // console.log(selectedTopic);
    }

    function handleWhatsAppClick() {
        window.open('https://api.whatsapp.com/send?phone=+821099221601', '_blank');
    }

    function handleTelegramClick() {
        window.open('https://t.me/ghayrat_samiev', '_blank');
    }

    console.log('APP COMPONENT EXECUTING');

    return (
        <div>
            <Header/>
            <main>
                <section id="core-concepts">
                    <h2>Our Services</h2>
                    <ul>
                        <CoreConcept
                            title={CORE_CONCEPTS[0].title}
                            description={CORE_CONCEPTS[0].description}
                            image={CORE_CONCEPTS[0].image}
                        />
                        <CoreConcept {...CORE_CONCEPTS[1]} />
                        <CoreConcept {...CORE_CONCEPTS[2]} />
                        <CoreConcept {...CORE_CONCEPTS[3]} />
                    </ul>
                </section>
                <section id="examples">
                    <h2>Examples</h2>
                    <menu>
                        <TabButton isSelected={selectedTopic === 'components'}
                                   onSelect={() => handleSelect('components')}>
                            K-ETA
                        </TabButton>
                        <TabButton isSelected={selectedTopic === 'jsx'}
                                   onSelect={() => handleSelect('jsx')}>G-1</TabButton>
                        <TabButton isSelected={selectedTopic === 'props'}
                                   onSelect={() => handleSelect('props')}>Visa/Visa extension</TabButton>
                        <TabButton isSelected={selectedTopic === 'state'}
                                   onSelect={() => handleSelect('state')}>Flight/Ferry tickets</TabButton>
                    <TabButton isSelected={selectedTopic === 'vacancies'}
                                   onSelect={() => handleSelect('state')}>Job and Vacancies</TabButton>
                    </menu>
                    {!selectedTopic ? <p>Please select a topic</p> : <div id="tab-content">
                        <h3>{EXAMPLES[selectedTopic].title}</h3>
                        <p>{EXAMPLES[selectedTopic].description}</p>
                        <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre></div>}
                </section>
                <Contacts></Contacts>
            </main>
        </div>
    );
}

export default App;