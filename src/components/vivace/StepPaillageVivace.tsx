import { CONSTANTS_VIVACE } from '../../constants-vivace';

interface StepPaillageVivaceProps {
  epaisseurPaillage: number;
  onChange: (value: number) => void;
}

export function StepPaillageVivace({ epaisseurPaillage, onChange }: StepPaillageVivaceProps) {
  return (
    <div className="step">
      <h2>Étape 3 : Paillage</h2>
      <p className="step-description">
        Souhaitez-vous un paillage ?<br />
        Nous vous recommandons de mettre en place une couche de paillage de {CONSTANTS_VIVACE.PAILLAGE_RECOMMANDE_CM} cm 
        pour maintenir l'humidité, réduire la fréquence des arrosages et faciliter l'entretien.
      </p>
      <div className="input-group">
        <label htmlFor="epaisseur-paillage-vivace">Épaisseur de paillage (en cm)</label>
        <input
          id="epaisseur-paillage-vivace"
          type="number"
          min="0"
          step="0.5"
          value={epaisseurPaillage || ''}
          onChange={(e) => onChange(parseFloat(e.target.value) || 0)}
          placeholder={`Ex: ${CONSTANTS_VIVACE.PAILLAGE_RECOMMANDE_CM}`}
        />
      </div>
      <button
        type="button"
        className="recommended-button"
        onClick={() => onChange(CONSTANTS_VIVACE.PAILLAGE_RECOMMANDE_CM)}
      >
        Utiliser la recommandation ({CONSTANTS_VIVACE.PAILLAGE_RECOMMANDE_CM} cm)
      </button>
    </div>
  );
}

