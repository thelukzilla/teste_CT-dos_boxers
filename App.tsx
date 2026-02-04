import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Benefits } from './components/Benefits';
import { Instructor } from './components/Instructor';
import { PricingSchedule } from './components/PricingSchedule';
import { Footer } from './components/Footer';
import { WhatsAppFloat } from './components/WhatsAppFloat';

// ============================================================================
// O COMPONENTE PRINCIPAL (APP)
// ============================================================================
// Agora o App.tsx está super limpo! Ele apenas organiza a ordem dos blocos.
// Toda a lógica pesada está dentro da pasta /components.
function App() {
  return (
    <div className="min-h-screen bg-boxer-black text-white selection:bg-boxer-red selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Benefits />
        <Instructor />
        <PricingSchedule />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export default App;