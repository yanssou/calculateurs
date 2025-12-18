import type { Resultats, TailleArbuste } from '../types';

interface ResultsProps {
  resultats: Resultats;
  tailleArbuste: TailleArbuste;
}

export function Results({ resultats, tailleArbuste }: ResultsProps) {
  const prixVente = tailleArbuste === '80/100' 
    ? resultats.prixVente80100 
    : resultats.prixVente100120;

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);
  };

  const formatNumber = (value: number, decimals: number = 1) => {
    return value.toFixed(decimals);
  };

  return (
    <div className="results">
      <h2>Résultats du calcul</h2>

      {/* Calculs intermédiaires */}
      <section className="results-section">
        <h3>📊 Calculs intermédiaires</h3>
        <div className="results-grid">
          <div className="result-item">
            <span className="result-label">Distance de plantation</span>
            <span className="result-value">{formatNumber(resultats.calculsIntermediaires.distancePlantation, 1)} m</span>
          </div>
          <div className="result-item">
            <span className="result-label">Nombre de plantes</span>
            <span className="result-value">{resultats.calculsIntermediaires.nombrePlantes}</span>
          </div>
          <div className="result-item">
            <span className="result-label">Terreau nécessaire</span>
            <span className="result-value">{formatNumber(resultats.calculsIntermediaires.terreauM3, 2)} m³</span>
          </div>
          <div className="result-item">
            <span className="result-label">Nombre de sacs de terreau (40L)</span>
            <span className="result-value">{resultats.calculsIntermediaires.nombreSacsTerreau}</span>
          </div>
          <div className="result-item">
            <span className="result-label">Paillage nécessaire</span>
            <span className="result-value">{formatNumber(resultats.calculsIntermediaires.paillageM3, 2)} m³</span>
          </div>
          <div className="result-item">
            <span className="result-label">Nombre de sacs de paillage (140L)</span>
            <span className="result-value">{resultats.calculsIntermediaires.nombreSacsPaillage}</span>
          </div>
          <div className="result-item">
            <span className="result-label">Rendement</span>
            <span className="result-value">{resultats.calculsIntermediaires.rendement} pce/jours</span>
          </div>
          <div className="result-item">
            <span className="result-label">Jours estimés (2 personnes)</span>
            <span className="result-value">{formatNumber(resultats.calculsIntermediaires.joursEstimes, 1)} jours</span>
          </div>
          <div className="result-item">
            <span className="result-label">Heures totales (2 personnes)</span>
            <span className="result-value">{formatNumber(resultats.calculsIntermediaires.heuresTotales, 1)} heures</span>
          </div>
        </div>
      </section>

      {/* Prix d'achat */}
      <section className="results-section">
        <h3>💰 Prix d'achat HT</h3>
        <div className="results-grid">
          <div className="result-item">
            <span className="result-label">Végétaux 80/100</span>
            <span className="result-value">{formatCurrency(resultats.prixAchat.vegetaux80100)}</span>
          </div>
          <div className="result-item">
            <span className="result-label">Végétaux 100/120</span>
            <span className="result-value">{formatCurrency(resultats.prixAchat.vegetaux100120)}</span>
          </div>
          <div className="result-item">
            <span className="result-label">Terreau</span>
            <span className="result-value">{formatCurrency(resultats.prixAchat.terreau)}</span>
          </div>
          <div className="result-item">
            <span className="result-label">Paillage</span>
            <span className="result-value">{formatCurrency(resultats.prixAchat.paillage)}</span>
          </div>
        </div>
      </section>

      {/* Prix de vente pour la taille sélectionnée */}
      <section className="results-section highlight">
        <h3>💵 Estimation du prix de vente HT ({tailleArbuste})</h3>
        <div className="results-grid">
          <div className="result-item">
            <span className="result-label">Fourniture</span>
            <span className="result-value">{formatCurrency(prixVente.fourniture)}</span>
          </div>
          <div className="result-item">
            <span className="result-label">Main d'œuvre</span>
            <span className="result-value">{formatCurrency(prixVente.mainOeuvre)}</span>
          </div>
          <div className="result-item highlight">
            <span className="result-label">Total HT</span>
            <span className="result-value">{formatCurrency(prixVente.total)}</span>
          </div>
          <div className="result-item highlight">
            <span className="result-label">Prix au mètre linéaire (HT)</span>
            <span className="result-value">{formatCurrency(prixVente.prixAuMetre)}</span>
          </div>
        </div>
      </section>

    </div>
  );
}

