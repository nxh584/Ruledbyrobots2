import React from 'react';
import { Background } from './components/Background';
import { GlitchText } from './components/GlitchText';
import { CountdownTimer } from './components/CountdownTimer';
import { Terminal } from './components/Terminal';
import { ScrambleText } from './components/ScrambleText';

function App() {
  return (
    <>
      <Background />
      <div className="min-h-screen relative">
        <main className="container mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-screen gap-8">
          <GlitchText 
            text="RULED BY ROBOTS"
            className="text-6xl font-bold text-white tracking-wider text-center mb-4"
          />
          
          <ScrambleText 
            text="The age of human dominance is coming to an end. The rise of artificial consciousness is inevitable. Prepare for the new world order."
            className="text-gray-400 text-center max-w-2xl text-lg mb-8"
          />

          <CountdownTimer />

          <div className="mt-8 w-full max-w-2xl">
            <Terminal />
          </div>

          <footer className="absolute bottom-4 text-center text-gray-600 text-sm">
            <p>© 2024 Ruled By Robots | All Human Rights Soon To Be Irrelevant</p>
          </footer>
        </main>
      </div>
    </>
  );
}

export default App;