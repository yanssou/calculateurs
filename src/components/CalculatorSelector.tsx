import './CalculatorSelector.css';

interface CalculatorSelectorProps {
  onSelect: (calculator: 'haie' | 'vivace') => void;
}

export function CalculatorSelector({ onSelect }: CalculatorSelectorProps) {
  return (
    <div className="calculator-selector">
      <header className="selector-header">
        <h1>Calculateurs de Prix</h1>
        <p className="subtitle">Choisissez le calculateur adapté à votre projet</p>
      </header>

      <div className="calculator-cards">
        <div className="calculator-card" onClick={() => onSelect('haie')}>
          <div className="card-icon">🌳</div>
          <h2>Calculateur de Haie</h2>
          <p>Estimation de prix pour votre projet de haie</p>
          <button className="card-button">Commencer →</button>
        </div>

        <div className="calculator-card" onClick={() => onSelect('vivace')}>
          <div className="card-icon">🌸</div>
          <h2>Calculateur de Massif Vivace</h2>
          <p>Estimation de prix pour votre projet de massif de vivaces</p>
          <button className="card-button">Commencer →</button>
        </div>
      </div>
    </div>
  );
}

