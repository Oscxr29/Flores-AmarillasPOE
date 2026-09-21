export type FlowerColor = "yellow" | "gold" | "cream";

type FlowerProps = {
  color: FlowerColor;
  isActive: boolean;
  onClick: () => void;
};

export default function Flower({ color, isActive, onClick }: FlowerProps) {
  return (
    <button
      className={`flower flower--${color}${isActive ? " flower--active" : ""}`}
      type="button"
      aria-label="Seleccionar flor"
      aria-pressed={isActive}
      onClick={onClick}
    >
      <div className="petal petal-top"></div>
      <div className="petal petal-right"></div>
      <div className="petal petal-bottom"></div>
      <div className="petal petal-left"></div>
      <div className="flower-center"></div>
    </button>
  );
}