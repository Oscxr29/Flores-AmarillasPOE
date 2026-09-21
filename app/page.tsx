"use client";

import { useState } from "react";
import Flower, { type FlowerColor } from "./components/flower";

const flowers: FlowerColor[] = ["yellow", "gold", "cream", "yellow", "gold", "cream", "yellow"];

export default function Home() {
  const [selectedFlower, setSelectedFlower] = useState<number | null>(null);
  const [showMessage, setShowMessage] = useState(false);

  return (
    <main>
      <h1>🌻 Flores Amarillas 🌻</h1>
      <p>Una pequeña sorpresa hecha con Next.js 💛</p>
      <div className="garden">
        {flowers.map((color, index) => (
          <Flower
            key={`${color}-${index}`}
            color={color}
            isActive={selectedFlower === index}
            onClick={() => setSelectedFlower(index)}
          />
        ))}
      </div>
      <button className="surprise-button" type="button" onClick={() => setShowMessage((visible) => !visible)}>
        {showMessage ? "Ocultar sorpresa" : "Mostrar sorpresa"} <span aria-hidden="true">✦</span>
      </button>
      {showMessage && (
        <section className="surprise-message" role="status" aria-live="polite">
          <span className="surprise-message__eyebrow">Un mensaje para ti</span>
          <strong>Que nunca te falten motivos para sonreír. 💛</strong>
          <span>Esta pequeña flor amarilla lleva un deseo especial.</span>
        </section>
      )}
      {selectedFlower !== null && (
        <p className="flower-hint" role="status">
          Elegiste la flor {selectedFlower + 1}. ¡Brilla diferente!
        </p>
      )}
    </main>
  );
}