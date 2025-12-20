import { CONSTANTS_VIVACE } from '../../constants-vivace';

interface StepParametresFinanciersVivaceProps {
  fraisGeneraux: number;
  marge: number;
  tauxHoraire: number;
  onFraisGenerauxChange: (value: number) => void;
  onMargeChange: (value: number) => void;
  onTauxHoraireChange: (value: number) => void;
}

export function StepParametresFinanciersVivace({
  fraisGeneraux,
  marge,
  tauxHoraire,
  onFraisGenerauxChange,
  onMargeChange,
  onTauxHoraireChange,
}: StepParametresFinanciersVivaceProps) {
  return (
    <div className="step">
      <h2>Étape 5 : Paramètres financiers</h2>
      <p className="step-description">
        Ajustez les paramètres financiers selon vos besoins. Ces valeurs sont préremplies mais peuvent être modifiées.
      </p>
      
      <div className="input-group">
        <label htmlFor="frais-generaux-vivace">
          Frais généraux (en %)
        </label>
        <input
          id="frais-generaux-vivace"
          type="number"
          min="0"
          max="100"
          step="0.1"
          value={(fraisGeneraux * 100) || ''}
          onChange={(e) => onFraisGenerauxChange(parseFloat(e.target.value) / 100 || 0)}
          placeholder="Ex: 15"
        />
        <span className="input-hint">Valeur par défaut : {CONSTANTS_VIVACE.FRAIS_GENERAUX_DEFAULT * 100}%</span>
      </div>

      <div className="input-group">
        <label htmlFor="marge-vivace">
          Marge (en %)
        </label>
        <input
          id="marge-vivace"
          type="number"
          min="0"
          max="100"
          step="0.1"
          value={(marge * 100) || ''}
          onChange={(e) => onMargeChange(parseFloat(e.target.value) / 100 || 0)}
          placeholder="Ex: 60"
        />
        <span className="input-hint">Valeur par défaut : {CONSTANTS_VIVACE.MARGE_DEFAULT * 100}%</span>
      </div>

      <div className="input-group">
        <label htmlFor="taux-horaire-vivace">
          Taux horaire (en €)
        </label>
        <input
          id="taux-horaire-vivace"
          type="number"
          min="0"
          step="0.1"
          value={tauxHoraire || ''}
          onChange={(e) => onTauxHoraireChange(parseFloat(e.target.value) || 0)}
          placeholder="Ex: 55"
        />
        <span className="input-hint">Valeur par défaut : {CONSTANTS_VIVACE.TAUX_HORAIRE_DEFAULT} €/heure</span>
      </div>
    </div>
  );
}

