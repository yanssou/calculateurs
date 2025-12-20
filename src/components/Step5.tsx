interface Step5Props {
  epaisseurPaillage: number;
  onChange: (value: number) => void;
}

export function Step5({ epaisseurPaillage, onChange }: Step5Props) {
  return (
    <div className="step">
      <h2>Étape 5 : Paillage</h2>
      <p className="step-description">
        Souhaitez-vous un paillage au pied des arbustes ?<br />
        Nous vous recommandons de mettre en place une couche de paillage de 5 cm 
        pour maintenir l'humidité, réduire la fréquence des arrosages et faciliter l'entretien.
      </p>
      <div className="input-group">
        <label htmlFor="epaisseur-paillage">Épaisseur de paillage (en cm)</label>
        <input
          id="epaisseur-paillage"
          type="number"
          min="0"
          step="0.5"
          value={epaisseurPaillage || ''}
          onChange={(e) => onChange(parseFloat(e.target.value) || 0)}
          placeholder="Ex: 5"
        />
      </div>
    </div>
  );
}

