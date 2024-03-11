import reactImage from './assets/react-core-concepts.png';
import compImage from './assets/components.png';
import { CORE_CONCEPTS } from './data';
import Header from './components/Header';
import CoreConcept from './components/coreconcepts';
import TabButton from './components/TabButtons';
function App() {
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
          <menu><TabButton>Components</TabButton>
          <TabButton>JSX</TabButton>
          <TabButton>Props</TabButton>
          <TabButton>State</TabButton></menu>
        </section>
        <section id="core-concepts"></section>


      </main>
    </div>
  );
}

export default App;
