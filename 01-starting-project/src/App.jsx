import reactImage from './assets/react-core-concepts.png';
import compImage from './assets/components.png';
import { CORE_CONCEPTS } from './data';
import Header from './components/Header';
import CoreConcept from './components/coreconcepts';
import TabButton from './components/TabButtons';
import {useState} from "react";

function App() {
  const [selectedTopic, setSelectedTopic] = useState('Please click a button');

  function handleSelected(selectedButton){
    setSelectedTopic(selectedButton)
    console.log(`Hello World--is ${selectedTopic}`);

  }
  return (
    <div>
      <Header></Header>

      <main>
        <section id="core-concepts">
          <h2>Core concepts</h2>
          <ul>
            <CoreConcept title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description} image={CORE_CONCEPTS[0].image} />
            <CoreConcept title={CORE_CONCEPTS[1].title}
              description={CORE_CONCEPTS[1].description} image={CORE_CONCEPTS[1].image} />
            <CoreConcept title={CORE_CONCEPTS[2].title}
              description={CORE_CONCEPTS[2].description} image={CORE_CONCEPTS[2].image} />
            <CoreConcept title={CORE_CONCEPTS[3].title}
              description={CORE_CONCEPTS[3].description} image={CORE_CONCEPTS[3].image} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu><TabButton onSelect={()=>handleSelected('components')}>Components</TabButton>
          <TabButton onSelect={()=>handleSelected('jsx')}>JSX</TabButton>
          <TabButton onSelect={()=>handleSelected('props')}>Props</TabButton>
          <TabButton onSelect={()=>handleSelected('state')}>State</TabButton></menu>
        </section>
        <section id="core-concepts">
          {selectedTopic}
        </section>
      </main>
    </div>
  );
}

export default App;
