import { CONSTANTS_VIVACE } from '../../constants-vivace';

interface StepSurfaceMassifProps {
  surfaceMassif: number;
  onChange: (value: number) => void;
}

export function StepSurfaceMassif({ surfaceMassif, onChange }: StepSurfaceMassifProps) {
  return (
    <div className="step">
      <h2>Étape 1 : Surface du massif</h2>
      <p className="step-description">Quelle est la surface de votre massif ?</p>
      <div className="input-group">
        <label htmlFor="surface-massif">Surface (en m²)</label>
        <input
          id="surface-massif"
          type="number"
          min="0"
          step="0.1"
          value={surfaceMassif || ''}
          onChange={(e) => onChange(parseFloat(e.target.value) || 0)}
          placeholder="Ex: 50"
        />
      </div>
      <div className="suggested-values">
        <p className="suggested-label">Ou choisissez une valeur suggérée :</p>
        <div className="suggested-buttons">
          {CONSTANTS_VIVACE.SURFACES_SUGGEREES.map((surface) => (
            <button
              key={surface}
              type="button"
              className={`suggested-button ${surfaceMassif === surface ? 'active' : ''}`}
              onClick={() => onChange(surface)}
            >
              {surface} m²
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

