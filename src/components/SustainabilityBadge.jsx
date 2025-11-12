import { sustainabilityLevels } from '../data/mockData';

function SustainabilityBadge({ level, showPoints = false }) {
  const levelData = sustainabilityLevels[level];
  
  if (!levelData) return null;

  return (
    <div 
      className="sustainability-badge" 
      style={{ backgroundColor: levelData.color }}
    >
      <span className="badge-label">Sustentabilidade {levelData.label}</span>
      {showPoints && (
        <span className="badge-points">+{levelData.points} pts</span>
      )}
    </div>
  );
}

export default SustainabilityBadge;

