import type { Mecanisation } from '../types';

interface StepMecanisationProps {
  mecanisation: Mecanisation;
  onChange: (value: Mecanisation) => void;
}

export function StepMecanisation({ mecanisation, onChange }: StepMecanisationProps) {
  return (
    <div className="step">
      <h2>Étape 2 : Mécanisation</h2>
      <p className="step-description">
        Allez-vous mécaniser l'opération (pelle mécanique) ?<br />
        Cela aura une incidence sur les rendements.
      </p>
      <div className="input-group">
        <label>Méthode de creusement</label>
        <div className="radio-group">
          <label className="radio-option">
            <input
              type="radio"
              name="mecanisation"
              value="mecanise"
              checked={mecanisation === 'mecanise'}
              onChange={() => onChange('mecanise')}
            />
            <span>Mécanisé</span>
          </label>
          <label className="radio-option">
            <input
              type="radio"
              name="mecanisation"
              value="manuel"
              checked={mecanisation === 'manuel'}
              onChange={() => onChange('manuel')}
            />
            <span>À la main</span>
          </label>
        </div>
      </div>
    </div>
  );
}

