import './App.css';

import QuizCard from './components/QuizCard';

function App() {
  
  return (
    <div className="App">
      <QuizCard 
      capital="Porotero"
      country1="Malardo"
      country2="Buenardo" 
      country3="Petardo" 
      country4="Sacaracatunga"
      correctCountry={"Petardo"}/>
    </div>
  );
}

export default App;
