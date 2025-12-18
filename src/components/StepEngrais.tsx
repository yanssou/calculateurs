import type { Engrais } from '../types';

interface StepEngraisProps {
  engrais: Engrais;
  onChange: (value: Engrais) => void;
}

export function StepEngrais({ engrais, onChange }: StepEngraisProps) {
  return (
    <div className="step">
      <h2>Étape 6 : Engrais</h2>
      <p className="step-description">
        Avez-vous besoin d'engrais ? Si votre sol est pauvre, vous pouvez ajouter 
        un engrais organique au pied des arbustes, une fois par an, au début du printemps, 
        pour stimuler leur croissance.
      </p>
      <div className="input-group">
        <label>Engrais</label>
        <div className="radio-group">
          <label className="radio-option">
            <input
              type="radio"
              name="engrais"
              value="OUI"
              checked={engrais === 'OUI'}
              onChange={() => onChange('OUI')}
            />
            <span>OUI</span>
          </label>
          <label className="radio-option">
            <input
              type="radio"
              name="engrais"
              value="NON"
              checked={engrais === 'NON'}
              onChange={() => onChange('NON')}
            />
            <span>NON</span>
          </label>
        </div>
      </div>
    </div>
  );
}

