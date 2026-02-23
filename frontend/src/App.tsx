import React from "react";
import Portfolio from "./components/Portfolio";
import Chat from "./components/Chat";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-orange-500 text-white shadow-md py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold tracking-tight">
            Suresh Choudhary | AI Portfolio
          </h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Portfolio />
          </div>
          <div className="lg:col-span-1">
            <div className="sticky top-4">
              <Chat />
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-orange-50 border-t border-orange-200 py-4 text-center text-sm text-gray-600">
        © 2026 Suresh Choudhary. Built with React, FastAPI, and AI.
      </footer>
    </div>
  );
}

export default App;
