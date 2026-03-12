"use client";

import { useState } from "react";
import { useCysts } from "@/context/CystContext";

interface EditingState {
  id: string;
  name: string;
  removal: string;
}

export default function SettingsTable() {
  const { cysts, updateCyst, resetToDefaults, isLoaded } = useCysts();
  const [editing, setEditing] = useState<EditingState | null>(null);
  const [showResetConfirm, setShowResetConfirm] = useState(false);

  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="text-pink-400 text-lg">Loading...</div>
      </div>
    );
  }

  const startEditing = (id: string) => {
    const cyst = cysts.find((c) => c.id === id);
    if (cyst) {
      setEditing({ id: cyst.id, name: cyst.name, removal: cyst.removal });
    }
  };

  const cancelEditing = () => {
    setEditing(null);
  };

  const saveEditing = () => {
    if (editing) {
      updateCyst(editing.id, { name: editing.name, removal: editing.removal });
      setEditing(null);
    }
  };

  const handleReset = () => {
    resetToDefaults();
    setShowResetConfirm(false);
    setEditing(null);
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-rose-900">Settings</h1>
        {showResetConfirm ? (
          <div className="flex items-center gap-2">
            <span className="text-amber-600 text-sm">Are you sure?</span>
            <button
              onClick={handleReset}
              className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white text-sm font-medium rounded-full transition-colors"
            >
              Yes, Reset
            </button>
            <button
              onClick={() => setShowResetConfirm(false)}
              className="px-4 py-2 bg-white hover:bg-pink-50 text-pink-600 text-sm font-medium rounded-full transition-colors border border-pink-200"
            >
              Cancel
            </button>
          </div>
        ) : (
          <button
            onClick={() => setShowResetConfirm(true)}
            className="px-4 py-2 bg-white hover:bg-pink-50 text-pink-600 text-sm font-medium rounded-full transition-colors border border-pink-200"
          >
            Reset to Defaults
          </button>
        )}
      </div>

      <div className="space-y-3">
        {cysts.map((cyst, index) => {
          const isEditing = editing?.id === cyst.id;

          return (
            <div
              key={cyst.id}
              className="bg-white rounded-2xl border border-pink-200 overflow-hidden shadow-sm"
            >
              <div className="flex items-start gap-4 p-4">
                {/* Index number */}
                <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-pink-100 rounded-full text-pink-500 text-sm font-mono font-bold">
                  {index + 1}
                </div>

                {/* Thumbnail */}
                <div className="flex-shrink-0 w-24 h-18 rounded-xl overflow-hidden bg-pink-50 border border-pink-100">
                  <img
                    src={cyst.imageUrl}
                    alt={cyst.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  {isEditing ? (
                    <div className="space-y-3">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-pink-400 mb-1">
                          Name
                        </label>
                        <input
                          type="text"
                          value={editing.name}
                          onChange={(e) =>
                            setEditing({ ...editing, name: e.target.value })
                          }
                          className="w-full px-3 py-2 bg-pink-50 border border-pink-200 rounded-xl text-rose-900 text-sm focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-pink-400 mb-1">
                          Removal / Management
                        </label>
                        <textarea
                          value={editing.removal}
                          onChange={(e) =>
                            setEditing({ ...editing, removal: e.target.value })
                          }
                          rows={4}
                          className="w-full px-3 py-2 bg-pink-50 border border-pink-200 rounded-xl text-rose-900 text-sm focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent resize-y"
                        />
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={saveEditing}
                          className="px-4 py-2 bg-pink-500 hover:bg-pink-600 text-white text-sm font-medium rounded-full transition-colors shadow-sm"
                        >
                          Save
                        </button>
                        <button
                          onClick={cancelEditing}
                          className="px-4 py-2 bg-white hover:bg-pink-50 text-pink-600 text-sm font-medium rounded-full transition-colors border border-pink-200"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div
                      className="cursor-pointer group"
                      onClick={() => startEditing(cyst.id)}
                    >
                      <h3 className="text-base font-semibold text-rose-900 group-hover:text-pink-600 transition-colors">
                        {cyst.name}
                      </h3>
                      <p className="text-sm text-rose-400 mt-1 line-clamp-2">
                        {cyst.removal}
                      </p>
                      <span className="inline-block mt-2 text-xs text-pink-400 opacity-0 group-hover:opacity-100 transition-opacity">
                        Click to edit
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
