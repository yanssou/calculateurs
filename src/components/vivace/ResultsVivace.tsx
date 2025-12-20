import type { ResultatsVivace } from '../../types-vivace';

interface ResultsVivaceProps {
  resultats: ResultatsVivace;
  surfaceMassif: number;
}

export function ResultsVivace({ resultats, surfaceMassif }: ResultsVivaceProps) {
  const { calculsIntermediaires, prixAchat, prixVente } = resultats;

  return (
    <div className="results">
      <h2>Résultats de l'estimation</h2>
      
      <div className="results-section">
        <h3>Calculs intermédiaires</h3>
        <div className="results-grid">
          <div className="result-item">
            <span className="result-label">Nombre de plantes :</span>
            <span className="result-value">{calculsIntermediaires.nombrePlantes} plantes</span>
          </div>
          <div className="result-item">
            <span className="result-label">Terreau :</span>
            <span className="result-value">
              {calculsIntermediaires.terreauM3.toFixed(3)} m³ 
              ({calculsIntermediaires.nombreSacsTerreau} sacs de 40L)
            </span>
          </div>
          <div className="result-item">
            <span className="result-label">Paillage :</span>
            <span className="result-value">
              {calculsIntermediaires.paillageM3.toFixed(3)} m³ 
              ({calculsIntermediaires.nombreSacsPaillage} sacs de 140L)
            </span>
          </div>
          <div className="result-item">
            <span className="result-label">Rendement :</span>
            <span className="result-value">{calculsIntermediaires.rendement.toFixed(1)} m²/jour</span>
          </div>
          <div className="result-item">
            <span className="result-label">Jours estimés (2 personnes) :</span>
            <span className="result-value">{calculsIntermediaires.joursEstimes.toFixed(2)} jours</span>
          </div>
          <div className="result-item">
            <span className="result-label">Heures totales (2 personnes) :</span>
            <span className="result-value">{calculsIntermediaires.heuresTotales.toFixed(2)} heures</span>
          </div>
        </div>
      </div>

      <div className="results-section">
        <h3>Prix d'achat (HT)</h3>
        <div className="results-grid">
          <div className="result-item">
            <span className="result-label">Végétaux :</span>
            <span className="result-value">{prixAchat.vegetaux.toFixed(2)} €</span>
          </div>
          <div className="result-item">
            <span className="result-label">Terreau :</span>
            <span className="result-value">{prixAchat.terreau.toFixed(2)} €</span>
          </div>
          <div className="result-item">
            <span className="result-label">Paillage :</span>
            <span className="result-value">{prixAchat.paillage.toFixed(2)} €</span>
          </div>
          <div className="result-item total">
            <span className="result-label">Total achat :</span>
            <span className="result-value">
              {(prixAchat.vegetaux + prixAchat.terreau + prixAchat.paillage).toFixed(2)} €
            </span>
          </div>
        </div>
      </div>

      <div className="results-section">
        <h3>Prix de vente (HT)</h3>
        <div className="results-grid">
          <div className="result-item">
            <span className="result-label">Fourniture :</span>
            <span className="result-value">{prixVente.fourniture.toFixed(2)} €</span>
          </div>
          <div className="result-item">
            <span className="result-label">Main d'œuvre :</span>
            <span className="result-value">{prixVente.mainOeuvre.toFixed(2)} €</span>
          </div>
          <div className="result-item total highlight">
            <span className="result-label">Total :</span>
            <span className="result-value">{prixVente.total.toFixed(2)} €</span>
          </div>
          <div className="result-item total">
            <span className="result-label">Prix au m² :</span>
            <span className="result-value">{prixVente.prixAuMetre.toFixed(2)} €/m²</span>
          </div>
        </div>
      </div>

      <div className="results-summary">
        <p className="summary-text">
          Pour un massif de <strong>{surfaceMassif} m²</strong>, le prix total estimé est de{' '}
          <strong>{prixVente.total.toFixed(2)} € HT</strong>, soit{' '}
          <strong>{prixVente.prixAuMetre.toFixed(2)} € HT/m²</strong>.
        </p>
      </div>
    </div>
  );
}

