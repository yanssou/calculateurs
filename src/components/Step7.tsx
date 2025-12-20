interface Step7Props {
  fraisGeneraux: number;
  marge: number;
  tauxHoraire: number;
  onFraisGenerauxChange: (value: number) => void;
  onMargeChange: (value: number) => void;
  onTauxHoraireChange: (value: number) => void;
}

export function Step7({ 
  fraisGeneraux, 
  marge, 
  tauxHoraire,
  onFraisGenerauxChange,
  onMargeChange,
  onTauxHoraireChange,
}: Step7Props) {
  return (
    <div className="step">
      <h2>Étape 7 : Paramètres financiers</h2>
      <p className="step-description">
        Vous pouvez ajuster ces paramètres. Ils peuvent être préenregistrés dans votre espace client.
      </p>
      <div className="input-group">
        <label htmlFor="frais-generaux">Frais généraux (en %)</label>
        <input
          id="frais-generaux"
          type="number"
          min="0"
          max="100"
          step="0.1"
          value={(fraisGeneraux * 100) || ''}
          onChange={(e) => onFraisGenerauxChange((parseFloat(e.target.value) || 0) / 100)}
          placeholder="Ex: 15"
        />
        <small>Valeur actuelle : {(fraisGeneraux * 100).toFixed(1)}%</small>
      </div>
      <div className="input-group">
        <label htmlFor="marge">Marge (en %)</label>
        <input
          id="marge"
          type="number"
          min="0"
          max="100"
          step="0.1"
          value={(marge * 100) || ''}
          onChange={(e) => onMargeChange((parseFloat(e.target.value) || 0) / 100)}
          placeholder="Ex: 25"
        />
        <small>Valeur actuelle : {(marge * 100).toFixed(1)}%</small>
      </div>
      <div className="input-group">
        <label htmlFor="taux-horaire">Taux horaire (en €)</label>
        <input
          id="taux-horaire"
          type="number"
          min="0"
          step="0.1"
          value={tauxHoraire || ''}
          onChange={(e) => onTauxHoraireChange(parseFloat(e.target.value) || 0)}
          placeholder="Ex: 55"
        />
        <small>Valeur actuelle : {tauxHoraire.toFixed(2)} €/heure</small>
      </div>
    </div>
  );
}

