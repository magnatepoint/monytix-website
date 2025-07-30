import React, { useEffect } from 'react';
import { useAnalytics } from './components/AnalyticsSetup';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import MarketOpportunitySection from './components/MarketOpportunitySection';
import BudgetingSection from './components/BudgetingSection';
import WellbeingSection from './components/WellbeingSection';
import ProcessSection from './components/ProcessSection';
import DashboardSection from './components/DashboardSection';
import TractionSection from './components/TractionSection';
import TeamSection from './components/TeamSection';
import CompetitiveAdvantageSection from './components/CompetitiveAdvantageSection';
import RevenueModelSection from './components/RevenueModelSection';
import CommandCentreSection from './components/CommandCentreSection';
import PlansSection from './components/PlansSection';
import './App.css';

function App() {
  const analytics = useAnalytics();

  useEffect(() => {
    // Track initial page load
    analytics.pageview(window.location.pathname + window.location.search);
  }, [analytics]);

  return (
    <div className="App">
      <Header />
      <div data-section="hero">
        <HeroSection />
      </div>
      <div data-section="market">
        <MarketOpportunitySection />
      </div>
      <div data-section="budgeting">
        <BudgetingSection />
      </div>
      <div data-section="wellbeing">
        <WellbeingSection />
      </div>
      <div data-section="process">
        <ProcessSection />
      </div>
      <div data-section="dashboard">
        <DashboardSection />
      </div>
      <div data-section="traction">
        <TractionSection />
      </div>
      <div data-section="team">
        <TeamSection />
      </div>
      <div data-section="competitive">
        <CompetitiveAdvantageSection />
      </div>
      <div data-section="revenue">
        <RevenueModelSection />
      </div>
      <div data-section="command-centre">
        <CommandCentreSection />
      </div>
      <div data-section="plans">
        <PlansSection />
      </div>
    </div>
  );
}

export default App; 