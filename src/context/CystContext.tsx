"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import { Cyst, defaultCysts } from "@/data/cysts";

const STORAGE_KEY = "jaw-cysts-flashcards-data";

interface CystContextType {
  cysts: Cyst[];
  updateCyst: (id: string, updates: Partial<Pick<Cyst, "name" | "removal">>) => void;
  resetToDefaults: () => void;
  isLoaded: boolean;
}

const CystContext = createContext<CystContextType | undefined>(undefined);

export function CystProvider({ children }: { children: React.ReactNode }) {
  const [cysts, setCysts] = useState<Cyst[]>(defaultCysts);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed: Cyst[] = JSON.parse(stored);
        // Merge stored data with defaults to handle any new cysts added
        const merged = defaultCysts.map((defaultCyst) => {
          const storedCyst = parsed.find((c) => c.id === defaultCyst.id);
          return storedCyst ? { ...defaultCyst, name: storedCyst.name, removal: storedCyst.removal } : defaultCyst;
        });
        setCysts(merged);
      }
    } catch {
      // If localStorage fails, use defaults
    }
    setIsLoaded(true);
  }, []);

  const persist = useCallback((data: Cyst[]) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch {
      // Silently fail if localStorage is full
    }
  }, []);

  const updateCyst = useCallback(
    (id: string, updates: Partial<Pick<Cyst, "name" | "removal">>) => {
      setCysts((prev) => {
        const next = prev.map((c) => (c.id === id ? { ...c, ...updates } : c));
        persist(next);
        return next;
      });
    },
    [persist]
  );

  const resetToDefaults = useCallback(() => {
    setCysts(defaultCysts);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // Silently fail
    }
  }, []);

  return (
    <CystContext.Provider value={{ cysts, updateCyst, resetToDefaults, isLoaded }}>
      {children}
    </CystContext.Provider>
  );
}

export function useCysts() {
  const context = useContext(CystContext);
  if (!context) {
    throw new Error("useCysts must be used within a CystProvider");
  }
  return context;
}
