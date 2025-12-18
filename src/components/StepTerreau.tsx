interface StepTerreauProps {
  volumeTerreau: number;
  onChange: (value: number) => void;
}

export function StepTerreau({ volumeTerreau, onChange }: StepTerreauProps) {
  return (
    <div className="step">
      <h2>Étape 4 : Terreau</h2>
      <p className="step-description">
        Souhaitez-vous du terreau ?<br />
        Nous vous recommandons 30 litres de terreau par arbuste.
      </p>
      <div className="input-group">
        <label htmlFor="volume-terreau">Volume de terreau (en litres)</label>
        <input
          id="volume-terreau"
          type="number"
          min="0"
          step="1"
          value={volumeTerreau || ''}
          onChange={(e) => onChange(parseFloat(e.target.value) || 0)}
          placeholder="Ex: 30"
        />
      </div>
    </div>
  );
}

