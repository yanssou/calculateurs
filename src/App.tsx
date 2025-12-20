import { useState } from 'react';
import { CalculatorSelector } from './components/CalculatorSelector';
import { AppHaie } from './AppHaie';
import { AppVivace } from './AppVivace';

type CalculatorType = 'selector' | 'haie' | 'vivace';

function App() {
  const [currentCalculator, setCurrentCalculator] = useState<CalculatorType>('selector');

  const handleSelectCalculator = (calculator: 'haie' | 'vivace') => {
    setCurrentCalculator(calculator);
  };

  const handleBack = () => {
    setCurrentCalculator('selector');
  };

  switch (currentCalculator) {
    case 'haie':
      return <AppHaie onBack={handleBack} />;
    case 'vivace':
      return <AppVivace onBack={handleBack} />;
    default:
      return <CalculatorSelector onSelect={handleSelectCalculator} />;
  }
}

export default App;
