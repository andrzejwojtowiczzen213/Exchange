"use client";
import React, { useState, CSSProperties, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import TransactionTimeline from './TransactionTimeline';

interface LocationState {
  selectedAsset: string;
  assetValue: string;
  mode: 'buy' | 'sell';
  selectedCurrency?: 'EUR' | 'USD';
  fiatValue?: string;
}

const Status: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsDrawerOpen(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
  
  // Debug log for raw location state
  console.log('Raw location:', location);
  
  // Ensure state exists and has the correct shape
  const state = location.state ? location.state as LocationState : null;
  console.log('Parsed state:', state);

  // Use state with fallbacks
  const [selectedAsset] = useState(() => {
    console.log('Initial selectedAsset:', state?.selectedAsset);
    return state?.selectedAsset || 'BTC';
  });
  
  const [assetValue] = useState(() => {
    console.log('Initial assetValue:', state?.assetValue);
    return state?.assetValue || '0';
  });
  
  const [mode] = useState<'buy' | 'sell'>(() => {
    console.log('Initial mode:', state?.mode);
    return state?.mode || 'buy';
  });
  
  const [selectedCurrency] = useState<'EUR' | 'USD'>(() => {
    console.log('Initial selectedCurrency:', state?.selectedCurrency);
    return state?.selectedCurrency || 'USD';
  });
  
  const [fiatValue] = useState(() => {
    console.log('Initial fiatValue:', state?.fiatValue);
    return state?.fiatValue || '0';
  });

  // Debug log for final state
  console.log('Final component state:', {
    selectedAsset,
    assetValue,
    mode,
    selectedCurrency,
    fiatValue
  });

  const containerStyles = {
    width: '393px',
    height: '777px',
    backgroundColor: '#ffffff',
    borderRadius: '16px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    position: 'relative' as const,
    display: 'flex',
    flexDirection: 'column' as const,
    margin: '0 auto',
  };

  const navBarStyles = {
    width: '100%',
    height: '48px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '16px 16px 0 16px',
    background: '#FFFFFF',
  };

  const navBarTextStyles = {
    fontFamily: 'Inter, sans-serif',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: 600,
    lineHeight: '24px',
    letterSpacing: '-0.09px',
    color: '#1E1E1E',
    textAlign: 'center' as const,
    flex: 1,
  };

  const iconContainerStyles = {
    width: '48px',
    height: '48px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const backButtonStyles = {
    width: '32px',
    height: '32px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'rgba(245, 247, 250, 0.01)',
    borderRadius: '640px',
    cursor: 'pointer',
  };

  const assetInfoStyles = {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    gap: '2px',
    padding: '24px 16px',
  };

  const assetTextStyles = {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    gap: '4px',
    marginTop: '16px',
    fontSize: '30px',
    fontFamily: '"Satoshi Variable", system-ui, sans-serif',
    fontStyle: 'normal',
    lineHeight: '36px',
    letterSpacing: '-0.09px',
    textAlign: 'center' as const,
  };

  const fiatValueStyles = {
    color: '#6B7280',
    fontSize: '24px',
    fontFamily: '"Satoshi Variable", system-ui, sans-serif',
    fontWeight: 500,
    lineHeight: '32px',
  };

  const buyingTextStyles = {
    color: 'rgba(107, 114, 128, 1)',
    fontWeight: 500,
  };

  const valueTextStyles = {
    color: 'rgba(30, 30, 30, 1)',
    fontWeight: 700,
  };

  const walletAndPaymentContainerStyles = {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'flex-start',
    gap: '0px',
    alignSelf: 'stretch',
    margin: '0 16px',
    border: '1px solid #E5E7EB',
    borderRadius: '12px',
    background: '#FFFFFF',
    boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
  };

  const sectionStyles = {
    display: 'flex',
    padding: '12px',
    flexDirection: 'column' as const,
    alignItems: 'flex-start',
    gap: '8px',
    alignSelf: 'stretch',
    width: '100%',
  };

  const dividerStyles = {
    width: '100%',
    height: '1px',
    backgroundColor: '#E5E7EB',
    margin: '4px 0',
  };

  const labelStyles = {
    color: '#6B7280',
    fontFamily: 'Inter, sans-serif',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: '20px',
  };

  const valueStyles = {
    color: '#1E1E1E',
    fontFamily: 'Inter, sans-serif',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: '24px',
  };

  const addressContainerStyles: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    marginBottom: '24px',
  };

  const addressLabelStyles: React.CSSProperties = {
    color: '#6B7280',
    fontSize: '14px',
    fontWeight: 500,
  };

  const addressValueStyles: React.CSSProperties = {
    color: '#1E1E1E',
    fontSize: '16px',
    fontWeight: 500,
    wordBreak: 'break-all' as const,
  };

  const copyButtonStyles: React.CSSProperties = {
    background: '#F3F4F6',
    border: 'none',
    borderRadius: '8px',
    padding: '8px 16px',
    color: '#1E1E1E',
    fontSize: '14px',
    fontWeight: 500,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    alignSelf: 'flex-start',
  };

  const qrCodeContainerStyles: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '24px',
  };

  const qrCodeStyles: React.CSSProperties = {
    width: '200px',
    height: '200px',
    padding: '16px',
    borderRadius: '8px',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.05)',
  };

  const warningStyles: React.CSSProperties = {
    backgroundColor: '#FEF3C7',
    border: '1px solid #FCD34D',
    borderRadius: '8px',
    padding: '16px',
    marginBottom: '24px',
  };

  const warningTextStyles: React.CSSProperties = {
    color: '#92400E',
    fontSize: '14px',
    lineHeight: '20px',
  };

  const warningTitleStyles: React.CSSProperties = {
    ...warningTextStyles,
    fontWeight: 600,
    marginBottom: '4px',
  };

  const pageContainerStyles: CSSProperties = {
    width: '100vw',
    height: '100vh',
    backgroundColor: '#242424',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '16px',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    margin: 0
  };

  const timelineContainerStyles = {
    padding: '24px 16px',
    flex: 1,
    overflow: 'auto',
  };

  const statuses = [
    {
      id: "1",
      statusText: "Transaction started",
      description: "",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isCompleted: true,
    },
    {
      id: "2",
      statusText: "Verification",
      description: "We're verifying your transaction details.",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isCompleted: true,
    },
    {
      id: "3",
      statusText: "Waiting for your crypto transfer",
      description: `We are waiting to receive your ${selectedAsset} transfer from your wallet (0xb794…ea0e68).`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isCompleted: false,
    },
    {
      id: "4",
      statusText: "Final checks",
      description: "We're performing final checks on your transaction.",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isCompleted: false,
    },
    {
      id: "5",
      statusText: "Payout",
      description: "Preparing your payout.",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isCompleted: false,
    },
  ];

  const handleBackClick = () => {
    navigate('/checkout', { 
      state: { 
        selectedAsset: state?.selectedAsset,
        assetValue: state?.assetValue,
        mode: state?.mode,
        selectedCurrency: state?.selectedCurrency,
        fiatValue: state?.fiatValue
      } 
    });
  };

  const truncateAddress = (address: string) => {
    return `${address.slice(0, 8)}...${address.slice(-8)}`;
  };

  const drawerStyles: React.CSSProperties = {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: '16px',
    borderTopRightRadius: '16px',
    padding: '16px',
    boxShadow: '0px 4px 24px rgba(0, 0, 0, 0.08)',
    transition: 'transform 0.3s ease-in-out',
    zIndex: 3,
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    maxHeight: '80vh',
    overflowY: 'auto',
  };

  const drawerHeaderStyles: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: '16px',
  };

  const drawerTitleStyles: React.CSSProperties = {
    fontSize: '18px',
    fontWeight: 600,
    color: '#1E1E1E',
    margin: 0,
    flex: 1,
    textAlign: 'center',
  };

  const drawerDescriptionStyles: React.CSSProperties = {
    color: '#6B7280',
    textAlign: 'center',
    fontFamily: 'Inter, sans-serif',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '20px',
    letterSpacing: '-0.09px',
    marginBottom: '16px',
  };

  const closeButtonStyles: React.CSSProperties = {
    background: 'none',
    border: 'none',
    padding: '8px',
    cursor: 'pointer',
    color: '#6B7280',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const drawerContentStyles: React.CSSProperties = {
    flex: 1,
    overflowY: 'auto',
    padding: '16px 0',
  };

  const overlayStyles: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    zIndex: 2,
    opacity: isDrawerOpen ? 1 : 0,
    visibility: isDrawerOpen ? 'visible' : 'hidden',
    transition: 'opacity 0.3s ease-in-out, visibility 0.3s ease-in-out',
  };

  const handleCheckClick = () => {
    setIsDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <div style={pageContainerStyles}>
      <div style={containerStyles}>
        <div style={navBarStyles}>
          <div style={iconContainerStyles}>
            <div style={backButtonStyles} onClick={handleBackClick}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.5 15.8334L6.66667 10.0001L12.5 4.16675" stroke="#1E1E1E" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
          <div style={navBarTextStyles}>Status</div>
          <div style={iconContainerStyles} />
        </div>
        <div style={assetInfoStyles}>
          {selectedAsset === 'BTC' ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="57" height="57" viewBox="0 0 57 57" fill="none">
              <path d="M55.6622 35.2733C51.9222 50.2735 36.7278 59.4023 21.7241 55.6617C6.72681 51.9221 -2.40301 36.7284 1.33865 21.7295C5.07704 6.72773 20.2715 -2.40175 35.2704 1.33786C50.273 5.07746 59.4022 20.2728 55.6618 35.2736L55.6621 35.2733H55.6622Z" fill="#F7931A"/>
              <path d="M41.0305 24.6517C41.5839 20.9005 38.7671 18.884 34.9153 17.5389L36.1648 12.4575L33.114 11.6868L31.8976 16.6344C31.0956 16.4315 30.2719 16.2404 29.4533 16.051L30.6785 11.0707L27.6296 10.3L26.3794 15.3797C25.7157 15.2265 25.0638 15.0751 24.4314 14.9155L24.4349 14.8995L20.2278 13.8344L19.4162 17.1381C19.4162 17.1381 21.6797 17.6641 21.632 17.6965C22.8674 18.0091 23.0908 18.8383 23.0537 19.4955L21.6303 25.2844C21.7154 25.3063 21.8258 25.338 21.9475 25.3876C21.8457 25.362 21.7374 25.334 21.625 25.3067L19.63 33.4161C19.479 33.7967 19.0958 34.3678 18.232 34.1509C18.2626 34.1958 16.0147 33.5899 16.0147 33.5899L14.5 37.1306L18.4701 38.134C19.2087 38.3218 19.9325 38.5183 20.6452 38.7031L19.3828 43.8427L22.4301 44.6135L23.6803 39.5284C24.5128 39.7575 25.3207 39.9689 26.1116 40.1681L24.8656 45.2292L27.9165 46L29.1788 40.87C34.3811 41.8682 38.2928 41.4657 39.9393 36.6949C41.266 32.8538 39.8732 30.6383 37.1363 29.1935C39.1298 28.7274 40.6312 27.3981 41.0316 24.6521L41.0306 24.6514L41.0305 24.6517ZM34.0601 34.5618C33.1173 38.4029 26.7387 36.3265 24.6707 35.8058L26.346 28.9967C28.4139 29.5201 35.0455 30.5559 34.0603 34.5618H34.0601ZM35.0036 24.5961C34.1436 28.0899 28.8346 26.3149 27.1124 25.8796L28.6313 19.7041C30.3535 20.1394 35.8996 20.9517 35.0039 24.5961H35.0036Z" fill="white"/>
            </svg>
          ) : selectedAsset === 'ETH' ? (
            <svg width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="28.5" cy="28.5" r="28.5" fill="#627EEA"/>
              <path d="M28.5 8v15.177l12.832 5.731L28.5 8Z" fill="#C0CBF6"/>
              <path d="M28.5 8 15.667 28.908l12.833-5.731V8Z" fill="white"/>
              <path d="M28.5 39.647v9.345l12.837-17.775L28.5 39.647Z" fill="#C0CBF6"/>
              <path d="m28.5 48.992v-9.345l-12.833-8.43L28.5 48.992Z" fill="white"/>
              <path d="m28.5 37.145 12.832-8.237-12.832-5.731v13.968Z" fill="#8197EE"/>
              <path d="m15.667 28.908 12.833 8.237V23.177l-12.833 5.731Z" fill="#C0CBF6"/>
            </svg>
          ) : (
            <svg width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="28.5" cy="28.5" r="28.5" fill="#000000"/>
              <path d="M19.319 35.353a.832.832 0 0 1 .587-.243h25.228a.416.416 0 0 1 .294.71l-5.166 5.166a.832.832 0 0 1-.587.243H14.447a.416.416 0 0 1-.294-.71l5.166-5.166Z" fill="url(#a)"/>
              <path d="M19.319 16.243a.832.832 0 0 1 .587-.243h25.228a.416.416 0 0 1 .294.71l-5.166 5.166a.832.832 0 0 1-.587.243H14.447a.416.416 0 0 1-.294-.71l5.166-5.166Z" fill="url(#b)"/>
              <path d="M39.675 25.743a.832.832 0 0 0-.587-.243H13.86a.416.416 0 0 0-.294.71l5.166 5.166a.832.832 0 0 0 .587.243h25.228a.416.416 0 0 0 .294-.71l-5.166-5.166Z" fill="url(#c)"/>
            </svg>
          )}
          <div style={assetTextStyles}>
            <div>
              <span style={buyingTextStyles}>{mode === 'buy' ? 'Buying' : 'Selling'}</span>
              <span style={{ ...valueTextStyles, margin: '0 4px' }}>{assetValue}</span>
              <span style={valueTextStyles}>{selectedAsset}</span>
            </div>
            <div style={fiatValueStyles}>
              For {fiatValue} {selectedCurrency}
            </div>
          </div>
        </div>
        <div style={timelineContainerStyles}>
          <TransactionTimeline statuses={statuses} onCheckClick={handleCheckClick} />
        </div>

        <div style={overlayStyles} onClick={handleCloseDrawer} />
        <div style={{
          ...drawerStyles,
          transform: `translateY(${isDrawerOpen ? '0' : '100%'})`,
        }}>
          <div style={drawerHeaderStyles}>
            <h2 style={drawerTitleStyles}>Send crypto to complete</h2>
            <button style={closeButtonStyles} onClick={handleCloseDrawer}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6L18 18" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
          <div style={drawerDescriptionStyles}>
            To receive your funds, go to your crypto wallet app and manually send the exact amount to Ramp Network's wallet address.
          </div>
          <div style={drawerContentStyles}>
            <div style={addressContainerStyles}>
              <div style={addressLabelStyles}>Send to this address</div>
              <div style={addressValueStyles}>
                bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh
              </div>
              <button style={copyButtonStyles}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.3333 6H7.33333C6.59695 6 6 6.59695 6 7.33333V13.3333C6 14.0697 6.59695 14.6667 7.33333 14.6667H13.3333C14.0697 14.6667 14.6667 14.0697 14.6667 13.3333V7.33333C14.6667 6.59695 14.0697 6 13.3333 6Z" stroke="#1E1E1E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3.33333 10H2.66667C2.31305 10 1.97391 9.85953 1.72386 9.60948C1.47381 9.35943 1.33334 9.02029 1.33334 8.66667V2.66667C1.33334 2.31305 1.47381 1.97391 1.72386 1.72386C1.97391 1.47381 2.31305 1.33334 2.66667 1.33334H8.66667C9.02029 1.33334 9.35943 1.47381 9.60948 1.72386C9.85953 1.97391 10 2.31305 10 2.66667V3.33334" stroke="#1E1E1E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Copy address
              </button>
            </div>
            <div style={addressContainerStyles}>
              <div style={addressLabelStyles}>Ramp Network's ETH wallet address</div>
              <div style={addressValueStyles}>
                0x1234567890123456789012345678901234567890
              </div>
              <button style={copyButtonStyles}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.3333 6H7.33333C6.59695 6 6 6.59695 6 7.33333V13.3333C6 14.0697 6.59695 14.6667 7.33333 14.6667H13.3333C14.0697 14.6667 14.6667 14.0697 14.6667 13.3333V7.33333C14.6667 6.59695 14.0697 6 13.3333 6Z" stroke="#1E1E1E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3.33333 10H2.66667C2.31305 10 1.97391 9.85953 1.72386 9.60948C1.47381 9.35943 1.33334 9.02029 1.33334 8.66667V2.66667C1.33334 2.31305 1.47381 1.97391 1.72386 1.72386C1.97391 1.47381 2.31305 1.33334 2.66667 1.33334H8.66667C9.02029 1.33334 9.35943 1.47381 9.60948 1.72386C9.85953 1.97391 10 2.31305 10 2.66667V3.33334" stroke="#1E1E1E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Copy address
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Status; 