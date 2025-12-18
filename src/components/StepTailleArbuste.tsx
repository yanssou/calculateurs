import type { TailleArbuste } from '../types';

interface StepTailleArbusteProps {
  tailleArbuste: TailleArbuste;
  onChange: (value: TailleArbuste) => void;
}

export function StepTailleArbuste({ tailleArbuste, onChange }: StepTailleArbusteProps) {
  return (
    <div className="step">
      <h2>Étape 3 : Taille d'arbuste</h2>
      <p className="step-description">Quelle taille d'arbuste souhaitez-vous ?</p>
      <div className="input-group">
        <label>Taille</label>
        <div className="radio-group">
          <label className="radio-option">
            <input
              type="radio"
              name="taille-arbuste"
              value="80/100"
              checked={tailleArbuste === '80/100'}
              onChange={() => onChange('80/100')}
            />
            <span>80/100</span>
          </label>
          <label className="radio-option">
            <input
              type="radio"
              name="taille-arbuste"
              value="100/120"
              checked={tailleArbuste === '100/120'}
              onChange={() => onChange('100/120')}
            />
            <span>100/120</span>
          </label>
        </div>
      </div>
    </div>
  );
}

