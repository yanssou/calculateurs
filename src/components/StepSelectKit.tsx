import { KITS } from '../kits';

interface StepSelectKitProps {
  kitId: number;
  onChange: (kitId: number) => void;
}

export function StepSelectKit({ kitId, onChange }: StepSelectKitProps) {
  return (
    <div className="step">
      <h2>Étape 0 : Choix du kit de plantes</h2>
      <p className="step-description">
        Choisissez le kit de plantes qui correspond à votre projet de haie.
      </p>
      <div className="input-group">
        <label htmlFor="kit-select">Kit de plantes</label>
        <select
          id="kit-select"
          value={kitId}
          onChange={(e) => onChange(parseInt(e.target.value))}
          className="kit-select"
        >
          {KITS.map((kit) => (
            <option key={kit.id} value={kit.id}>
              Kit N°{kit.id}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

