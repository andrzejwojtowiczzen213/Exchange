import React from 'react';

interface TransactionStatusItemProps {
  statusText: string;
  description: string;
  timestamp: string;
  isCompleted: boolean;
}

const TransactionStatusItem: React.FC<TransactionStatusItemProps> = ({
  statusText,
  timestamp,
  isCompleted,
}) => {
  const styles = {
    container: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '12px',
    },
    iconContainer: {
      width: '24px',
      height: '24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: isCompleted ? '#16A34A' : '#E5E7EB',
      borderRadius: '50%',
    },
    content: {
      flex: 1,
    },
    statusText: {
      color: '#1E1E1E',
      fontFamily: 'Inter, sans-serif',
      fontSize: '14px',
      fontWeight: 500,
      lineHeight: '20px',
      marginBottom: '4px',
    },
    timestamp: {
      color: '#6B7280',
      fontFamily: 'Inter, sans-serif',
      fontSize: '12px',
      fontWeight: 400,
      lineHeight: '16px',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.iconContainer}>
        {isCompleted && (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.9165 10.3613L7.68924 15.4168L17.0832 4.5835" stroke="white" strokeWidth="1.25" strokeLinecap="square"/>
          </svg>
        )}
      </div>
      <div style={styles.content}>
        <div style={styles.statusText}>{statusText}</div>
        <div style={styles.timestamp}>{timestamp}</div>
      </div>
    </div>
  );
};

export default TransactionStatusItem; 