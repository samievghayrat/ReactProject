import reactImage from '../assets/react-core-concepts.png';


const reactDescriptions  = ['Fundamentals', 'Crucial', 'Core'];
function getRandomInt(max){
  return Math.floor(Math.random()*(max+1));
}

export default function Header() {
  const descriptions = reactDescriptions[getRandomInt(2)];
  return <header>
    <img src={reactImage} alt="Stylized atom" />
   <h1>TJK-Korea</h1>

    <p>
      Out goal is to help foreigners to adapt in South Korae
    </p>
  </header>
}
