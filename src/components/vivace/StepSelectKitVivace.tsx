import { KITS_VIVACE } from '../../kits-vivace';

interface StepSelectKitVivaceProps {
  kitId: number;
  onChange: (kitId: number) => void;
}

export function StepSelectKitVivace({ kitId, onChange }: StepSelectKitVivaceProps) {
  const selectedKit = KITS_VIVACE.find(k => k.id === kitId) || KITS_VIVACE[0];

  return (
    <div className="step">
      <h2>Étape 4 : Choix du kit de plantes</h2>
      <p className="step-description">
        Choisissez le kit de plantes qui correspond à votre projet de massif vivace.
      </p>
      <div className="input-group">
        <label htmlFor="kit-select-vivace">Kit de plantes</label>
        <select
          id="kit-select-vivace"
          value={kitId}
          onChange={(e) => onChange(parseInt(e.target.value))}
          className="kit-select"
        >
          {KITS_VIVACE.map((kit) => (
            <option key={kit.id} value={kit.id}>
              Kit N°{kit.id} : {kit.titre}
            </option>
          ))}
        </select>
      </div>
      
      {selectedKit && (
        <div className="kit-details">
          <h3>{selectedKit.titre}</h3>
          {selectedKit.sousTitre && <p className="kit-subtitle">{selectedKit.sousTitre}</p>}
          <div className="kit-plantes">
            <h4>Plantes du kit :</h4>
            <ul>
              {selectedKit.plantes.map((plante, index) => (
                <li key={index}>
                  <strong>{plante.nom}</strong> ({plante.type}) - {plante.nombreParM2Quantite} plante(s)/m²
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

