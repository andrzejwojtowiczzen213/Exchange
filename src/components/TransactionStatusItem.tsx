import React from 'react';

interface TransactionStatusItemProps {
  statusText: string;
  description: string;
  timestamp: string;
  isCompleted: boolean;
}

const TransactionStatusItem: React.FC<TransactionStatusItemProps> = ({
  statusText,
  description,
  timestamp,
  isCompleted,
}) => {
  const styles = {
    container: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '12px',
      width: '100%',
    },
    iconContainer: {
      width: '24px',
      height: '24px',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: isCompleted ? '#10B981' : '#E5E7EB',
      flexShrink: 0,
    },
    content: {
      flex: 1,
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '4px',
    },
    statusText: {
      color: '#1E1E1E',
      fontSize: '14px',
      fontWeight: 400,
      lineHeight: '20px',
      fontFamily: 'Inter, sans-serif',
      textAlign: 'left' as const,
    },
    timestamp: {
      color: '#6B7280',
      fontSize: '12px',
      lineHeight: '16px',
      fontFamily: 'Inter, sans-serif',
    },
    description: {
      color: '#6B7280',
      fontSize: '12px',
      lineHeight: '16px',
      fontFamily: 'Inter, sans-serif',
      textAlign: 'left' as const,
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.iconContainer}>
        {isCompleted ? (
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ) : (
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#9CA3AF' }} />
        )}
      </div>
      <div style={styles.content}>
        <div style={styles.header}>
          <span style={styles.statusText}>{statusText}</span>
          <span style={styles.timestamp}>{timestamp}</span>
        </div>
        <p style={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default TransactionStatusItem; 