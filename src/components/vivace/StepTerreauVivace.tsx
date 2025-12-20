import { CONSTANTS_VIVACE } from '../../constants-vivace';

interface StepTerreauVivaceProps {
  volumeTerreau: number;
  onChange: (value: number) => void;
}

export function StepTerreauVivace({ volumeTerreau, onChange }: StepTerreauVivaceProps) {
  return (
    <div className="step">
      <h2>Étape 2 : Terreau</h2>
      <p className="step-description">
        Souhaitez-vous du terreau ?<br />
        Nous vous recommandons {CONSTANTS_VIVACE.TERREAU_RECOMMANDE_L_PAR_M2} litres de terreau par m² de massif.
      </p>
      <div className="input-group">
        <label htmlFor="volume-terreau-vivace">Volume de terreau par m² (en litres)</label>
        <input
          id="volume-terreau-vivace"
          type="number"
          min="0"
          step="1"
          value={volumeTerreau || ''}
          onChange={(e) => onChange(parseFloat(e.target.value) || 0)}
          placeholder={`Ex: ${CONSTANTS_VIVACE.TERREAU_RECOMMANDE_L_PAR_M2}`}
        />
      </div>
      <button
        type="button"
        className="recommended-button"
        onClick={() => onChange(CONSTANTS_VIVACE.TERREAU_RECOMMANDE_L_PAR_M2)}
      >
        Utiliser la recommandation ({CONSTANTS_VIVACE.TERREAU_RECOMMANDE_L_PAR_M2} L/m²)
      </button>
    </div>
  );
}

