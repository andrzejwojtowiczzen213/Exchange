import React from 'react';

interface TransactionStatusItemProps {
  statusText: string;
  description: string;
  timestamp: string;
  isCompleted: boolean;
  onClick?: () => void;
}

const TransactionStatusItem: React.FC<TransactionStatusItemProps> = ({
  statusText,
  description,
  timestamp,
  isCompleted,
  onClick,
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
      cursor: isCompleted ? 'pointer' : 'default',
    },
    content: {
      flex: 1,
    },
    headerRow: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '4px',
    },
    statusText: {
      color: '#1E1E1E',
      fontFamily: 'Inter, sans-serif',
      fontSize: '14px',
      fontWeight: 500,
      lineHeight: '20px',
    },
    timestamp: {
      color: '#6B7280',
      fontFamily: 'Inter, sans-serif',
      fontSize: '12px',
      fontWeight: 400,
      lineHeight: '16px',
    },
    description: {
      color: '#6B7280',
      fontFamily: 'Inter, sans-serif',
      fontSize: '12px',
      fontWeight: 400,
      lineHeight: '16px',
      marginBottom: '4px',
    },
    button: {
      display: 'flex',
      padding: '8px 12px',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '4px',
      alignSelf: 'stretch',
      borderRadius: '8px',
      borderBottom: '0.5px solid #1F2937',
      background: '#1F2937',
      boxShadow: '0px 2px 4px 0px rgba(30, 30, 30, 0.16)',
      color: '#FFFFFF',
      fontFamily: 'Inter, sans-serif',
      fontSize: '14px',
      fontWeight: 600,
      cursor: 'pointer',
      border: 'none',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.iconContainer} onClick={onClick}>
        {isCompleted ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <rect width="24" height="24" fill="white"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM16.0554 9.39446L14.8945 8.4446L10.4443 13.8837L8.5 11.9393L7.43934 13L10.5557 16.1163L16.0554 9.39446Z" fill="#16A34A"/>
          </svg>
        ) : statusText === 'Waiting for your crypto transfer' ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <g clipPath="url(#paint0_angular_440_13989_clip_path)">
              <g transform="matrix(0 0.008 -0.008 0 8 8)">
                <foreignObject x="-1036.78" y="-1036.78" width="2073.55" height="2073.55">
                  <div xmlns="http://www.w3.org/1999/xhtml" style={{background: 'conic-gradient(from 90deg,rgba(75, 85, 99, 0) 0deg,rgba(75, 85, 99, 1) 360deg)', height: '100%', width: '100%', opacity: 1}}></div>
                </foreignObject>
              </g>
            </g>
            <path fillRule="evenodd" clipRule="evenodd" d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM8.11142 13.7893C11.2233 13.7893 13.7459 11.2666 13.7459 8.15477C13.7459 5.04291 11.2233 2.52025 8.11142 2.52025C4.99956 2.52025 2.47691 5.04291 2.47691 8.15477C2.47691 11.2666 4.99956 13.7893 8.11142 13.7893Z"/>
            <defs>
              <clipPath id="paint0_angular_440_13989_clip_path">
                <path fillRule="evenodd" clipRule="evenodd" d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM8.11142 13.7893C11.2233 13.7893 13.7459 11.2666 13.7459 8.15477C13.7459 5.04291 11.2233 2.52025 8.11142 2.52025C4.99956 2.52025 2.47691 5.04291 2.47691 8.15477C2.47691 11.2666 4.99956 13.7893 8.11142 13.7893Z"/>
              </clipPath>
            </defs>
          </svg>
        ) : (statusText === 'Final checks' || statusText === 'Payout') ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
            <circle cx="10" cy="10.3594" r="9.25" stroke="#E5E7EB" strokeWidth="1.5" strokeLinecap="square"/>
          </svg>
        ) : null}
      </div>
      <div style={styles.content}>
        <div style={styles.headerRow}>
          <div style={styles.statusText}>{statusText}</div>
          <div style={styles.timestamp}>{timestamp}</div>
        </div>
        {description && <div style={styles.description}>{description}</div>}
        {statusText === 'Waiting for your crypto transfer' && (
          <button style={styles.button} onClick={onClick}>
            Send crypto to complete
          </button>
        )}
      </div>
    </div>
  );
};

export default TransactionStatusItem; 