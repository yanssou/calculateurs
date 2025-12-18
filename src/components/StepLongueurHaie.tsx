interface StepLongueurHaieProps {
  longueurHaie: number;
  onChange: (value: number) => void;
}

export function StepLongueurHaie({ longueurHaie, onChange }: StepLongueurHaieProps) {
  return (
    <div className="step">
      <h2>Étape 1 : Longueur de la haie</h2>
      <p className="step-description">Quelle est la longueur de votre haie ?</p>
      <div className="input-group">
        <label htmlFor="longueur-haie">Longueur (en mètres)</label>
        <input
          id="longueur-haie"
          type="number"
          min="0"
          step="0.1"
          value={longueurHaie || ''}
          onChange={(e) => onChange(parseFloat(e.target.value) || 0)}
          placeholder="Ex: 50"
        />
      </div>
    </div>
  );
}

