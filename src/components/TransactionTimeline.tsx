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
}

const TransactionTimeline: React.FC<TransactionTimelineProps> = ({ statuses }) => {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column' as const,
      gap: '24px',
    },
    itemContainer: {
      position: 'relative' as const,
    },
    line: {
      position: 'absolute' as const,
      left: '11px',
      top: '24px',
      bottom: '-24px',
      width: '2px',
      backgroundColor: '#E5E7EB',
    },
  };

  return (
    <div style={styles.container}>
      {statuses.map((status, index) => (
        <div key={status.id} style={styles.itemContainer}>
          {index < statuses.length - 1 && <div style={styles.line} />}
          <TransactionStatusItem
            statusText={status.statusText}
            description={status.description}
            timestamp={status.timestamp}
            isCompleted={status.isCompleted}
          />
        </div>
      ))}
    </div>
  );
};

export default TransactionTimeline; 