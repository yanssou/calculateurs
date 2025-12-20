import { useState, useMemo } from 'react';
import { CONSTANTS } from './constants';
import { calculerResultats } from './calculations';
import type { CalculateurData } from './types';
import { StepSelectKit } from './components/StepSelectKit';
import { StepLongueurHaie } from './components/StepLongueurHaie';
import { StepMecanisation } from './components/StepMecanisation';
import { StepTailleArbuste } from './components/StepTailleArbuste';
import { StepTerreau } from './components/StepTerreau';
import { StepPaillage } from './components/StepPaillage';
import { StepEngrais } from './components/StepEngrais';
import { StepParametresFinanciers } from './components/StepParametresFinanciers';
import { Results } from './components/Results';
import './App.css';

const TOTAL_STEPS = 8;

interface AppHaieProps {
  onBack: () => void;
}

export function AppHaie({ onBack }: AppHaieProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [data, setData] = useState<CalculateurData>({
    kitId: 1, // Kit par défaut
    longueurHaie: 50,
    mecanisation: 'manuel',
    tailleArbuste: '80/100',
    volumeTerreau: 20,
    epaisseurPaillage: 5,
    engrais: 'NON',
    fraisGeneraux: CONSTANTS.FRAIS_GENERAUX_DEFAULT,
    marge: CONSTANTS.MARGE_DEFAULT,
    tauxHoraire: CONSTANTS.TAUX_HORAIRE_DEFAULT,
  });

  // Calculer les résultats à chaque changement de données
  const resultats = useMemo(() => {
    if (data.longueurHaie > 0 && data.volumeTerreau >= 0 && data.epaisseurPaillage >= 0) {
      return calculerResultats(data);
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
        return data.kitId > 0;
      case 1:
        return data.longueurHaie > 0;
      case 2:
        return true; // Toujours une valeur sélectionnée
      case 3:
        return true; // Toujours une valeur sélectionnée
      case 4:
        return data.volumeTerreau >= 0;
      case 5:
        return data.epaisseurPaillage >= 0;
      case 6:
        return true; // Toujours une valeur sélectionnée
      case 7:
        return true; // Paramètres optionnels
      default:
        return false;
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <StepSelectKit
            kitId={data.kitId}
            onChange={(value) => setData({ ...data, kitId: value })}
          />
        );
      case 1:
        return (
          <StepLongueurHaie
            longueurHaie={data.longueurHaie}
            onChange={(value) => setData({ ...data, longueurHaie: value })}
          />
        );
      case 2:
        return (
          <StepMecanisation
            mecanisation={data.mecanisation}
            onChange={(value) => setData({ ...data, mecanisation: value })}
          />
        );
      case 3:
        return (
          <StepTailleArbuste
            tailleArbuste={data.tailleArbuste}
            onChange={(value) => setData({ ...data, tailleArbuste: value })}
          />
        );
      case 4:
        return (
          <StepTerreau
            volumeTerreau={data.volumeTerreau}
            onChange={(value) => setData({ ...data, volumeTerreau: value })}
          />
        );
      case 5:
        return (
          <StepPaillage
            epaisseurPaillage={data.epaisseurPaillage}
            onChange={(value) => setData({ ...data, epaisseurPaillage: value })}
          />
        );
      case 6:
        return (
          <StepEngrais
            engrais={data.engrais}
            onChange={(value) => setData({ ...data, engrais: value })}
          />
        );
      case 7:
        return (
          <StepParametresFinanciers
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
        <h1>Calculateur de Haie</h1>
        <p className="subtitle">Estimation de prix pour votre projet de haie</p>
      </header>

      <div className="progress-bar">
        <div 
          className="progress-fill" 
          style={{ width: `${(currentStep / TOTAL_STEPS) * 100}%` }}
        />
      </div>

      <div className="step-indicator">
        Étape {currentStep + 1} sur {TOTAL_STEPS}
      </div>

      {currentStep < TOTAL_STEPS && (
        <main className="main-content">
          {renderStep()}
        </main>
      )}

      {resultats && currentStep === TOTAL_STEPS && (
        <div className="results-container">
          <Results 
            resultats={resultats} 
            tailleArbuste={data.tailleArbuste}
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

