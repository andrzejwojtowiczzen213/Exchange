import React from 'react';
import TransactionStatusItem from './TransactionStatusItem';

interface Status {
  id: string;
  statusText: string;
  description: string;
  timestamp: string;
  isCompleted: boolean;
}

interface TransactionTimelineProps {
  statuses: Status[];
  onCheckClick: () => void;
}

const timelineStyles = {
  display: 'flex',
  flexDirection: 'column' as const,
  gap: '24px',
  background: '#FFFFFF',
  borderRadius: '12px',
};

export const TransactionTimeline: React.FC<TransactionTimelineProps> = ({ statuses, onCheckClick }) => {
  return (
    <div style={timelineStyles}>
      {statuses.map((status, index) => (
        <div key={status.id} style={{ position: 'relative' }}>
          {index < statuses.length - 1 && (
            <div style={{
              position: 'absolute',
              left: '11px',
              top: '24px',
              bottom: '-24px',
              width: '2px',
              borderLeft: '2px dotted #E5E7EB',
              backgroundColor: 'transparent',
            }} />
          )}
          <TransactionStatusItem
            statusText={status.statusText}
            description={status.description}
            timestamp={status.timestamp}
            isCompleted={status.isCompleted}
            onClick={onCheckClick}
          />
        </div>
      ))}
    </div>
  );
};

export default TransactionTimeline; 