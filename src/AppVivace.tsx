import { useState, useMemo } from 'react';
import { CONSTANTS_VIVACE } from './constants-vivace';
import { calculerResultatsVivace } from './calculations-vivace';
import type { CalculateurVivaceData } from './types-vivace';
import { StepSurfaceMassif } from './components/vivace/StepSurfaceMassif';
import { StepTerreauVivace } from './components/vivace/StepTerreauVivace';
import { StepPaillageVivace } from './components/vivace/StepPaillageVivace';
import { StepSelectKitVivace } from './components/vivace/StepSelectKitVivace';
import { StepParametresFinanciersVivace } from './components/vivace/StepParametresFinanciersVivace';
import { ResultsVivace } from './components/vivace/ResultsVivace';
import './App.css';

const TOTAL_STEPS = 5;

interface AppVivaceProps {
  onBack: () => void;
}

export function AppVivace({ onBack }: AppVivaceProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [data, setData] = useState<CalculateurVivaceData>({
    kitId: 1, // Kit par défaut
    surfaceMassif: 50,
    volumeTerreau: CONSTANTS_VIVACE.TERREAU_RECOMMANDE_L_PAR_M2,
    epaisseurPaillage: CONSTANTS_VIVACE.PAILLAGE_RECOMMANDE_CM,
    fraisGeneraux: CONSTANTS_VIVACE.FRAIS_GENERAUX_DEFAULT,
    marge: CONSTANTS_VIVACE.MARGE_DEFAULT,
    tauxHoraire: CONSTANTS_VIVACE.TAUX_HORAIRE_DEFAULT,
  });

  // Calculer les résultats à chaque changement de données
  const resultats = useMemo(() => {
    if (data.surfaceMassif > 0 && data.volumeTerreau >= 0 && data.epaisseurPaillage >= 0) {
      return calculerResultatsVivace(data);
    }
    return null;
  }, [data]);

  const handleNext = () => {
    if (currentStep < TOTAL_STEPS) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const canProceed = () => {
    switch (currentStep) {
      case 0:
        return data.surfaceMassif > 0;
      case 1:
        return data.volumeTerreau >= 0;
      case 2:
        return data.epaisseurPaillage >= 0;
      case 3:
        return data.kitId > 0;
      case 4:
        return true; // Paramètres optionnels
      default:
        return false;
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <StepSurfaceMassif
            surfaceMassif={data.surfaceMassif}
            onChange={(value) => setData({ ...data, surfaceMassif: value })}
          />
        );
      case 1:
        return (
          <StepTerreauVivace
            volumeTerreau={data.volumeTerreau}
            onChange={(value) => setData({ ...data, volumeTerreau: value })}
          />
        );
      case 2:
        return (
          <StepPaillageVivace
            epaisseurPaillage={data.epaisseurPaillage}
            onChange={(value) => setData({ ...data, epaisseurPaillage: value })}
          />
        );
      case 3:
        return (
          <StepSelectKitVivace
            kitId={data.kitId}
            onChange={(value) => setData({ ...data, kitId: value })}
          />
        );
      case 4:
        return (
          <StepParametresFinanciersVivace
            fraisGeneraux={data.fraisGeneraux}
            marge={data.marge}
            tauxHoraire={data.tauxHoraire}
            onFraisGenerauxChange={(value) => setData({ ...data, fraisGeneraux: value })}
            onMargeChange={(value) => setData({ ...data, marge: value })}
            onTauxHoraireChange={(value) => setData({ ...data, tauxHoraire: value })}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="app">
      <header className="app-header">
        <button onClick={onBack} className="back-button">← Retour au menu</button>
        <h1>Calculateur de<br />Massif Vivace</h1>
        <p className="subtitle">Estimation de prix pour votre projet de massif de vivaces</p>
      </header>

      <div className="progress-bar">
        <div 
          className="progress-fill" 
          style={{ width: `${(currentStep / TOTAL_STEPS) * 100}%` }}
        />
      </div>

      <div className="step-indicator">
        Étape {currentStep} sur {TOTAL_STEPS}
      </div>

      {currentStep < TOTAL_STEPS && (
        <main className="main-content">
          {renderStep()}
        </main>
      )}

      {resultats && currentStep === TOTAL_STEPS && (
        <div className="results-container">
          <ResultsVivace 
            resultats={resultats} 
            surfaceMassif={data.surfaceMassif}
          />
        </div>
      )}

      <div className="navigation">
        <button 
          onClick={handlePrevious} 
          disabled={currentStep === 0}
          className="nav-button prev"
        >
          ← Précédent
        </button>
        {currentStep < TOTAL_STEPS ? (
          <button 
            onClick={handleNext} 
            disabled={!canProceed()}
            className="nav-button next"
          >
            Suivant →
          </button>
        ) : (
          <button 
            onClick={() => setCurrentStep(0)}
            className="nav-button restart"
          >
            Recommencer
          </button>
        )}
      </div>
    </div>
  );
}

