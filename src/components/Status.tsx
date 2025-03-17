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

  const inputContainerStyles: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    borderRadius: '8px',
    border: '1px solid #E5E7EB',
    background: '#FFF',
    padding: '12px',
  };

  const assetIconStyles: React.CSSProperties = {
    width: '24px',
    height: '24px',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginTop: '2px',
  };

  const addressValueStyles: React.CSSProperties = {
    color: '#1E1E1E',
    fontSize: '16px',
    fontWeight: 500,
    wordBreak: 'break-all' as const,
    flex: 1,
  };

  const copyButtonStyles: React.CSSProperties = {
    display: 'flex',
    minWidth: '24px',
    minHeight: '24px',
    maxHeight: '24px',
    padding: '4px 8px',
    alignItems: 'center',
    gap: '4px',
    borderRadius: '8px',
    border: '1px solid #D2D9E5',
    background: '#FFF',
    boxShadow: '0px 2px 4px 0px rgba(30, 30, 30, 0.04)',
    color: '#1E1E1E',
    fontSize: '14px',
    fontWeight: 500,
    cursor: 'pointer',
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
  };

  const drawerTitleStyles: React.CSSProperties = {
    fontSize: '16px',
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

  const iconsContainerStyles: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    marginBottom: '24px',
  };

  const iconRectangleStyles: React.CSSProperties = {
    width: '80px',
    height: '80px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '16px',
    border: '1px solid #E5E7EB',
    background: '#FFF',
  };

  const largeAssetIconStyles: React.CSSProperties = {
    width: '48px',
    height: '48px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const rampLogoContainerStyles: React.CSSProperties = {
    width: '48px',
    height: '48px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const arrowContainerStyles: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
  };

  const arrowIconStyles: React.CSSProperties = {
    width: '6px',
    height: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const middleArrowIconStyles: React.CSSProperties = {
    width: '8px',
    height: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
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
    width: '40px',
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

  const helpTextContainerStyles: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '4px',
    marginTop: '24px',
  };

  const helpTextStyles: React.CSSProperties = {
    color: '#6B7280',
    fontFamily: 'Inter, sans-serif',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '20px',
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
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="24" cy="24" r="24" fill="#627EEA"/>
              <path d="M24 2.66667v11.1778l10.8444 4.8444L24 2.66667Z" fill="#C0CBF6"/>
              <path d="M24 2.66667 13.1556 19.1111l10.8444-4.84444V2.66667Z" fill="white"/>
              <path d="M24 33.4222v3.9111l10.8444-7.5111L24 33.4222Z" fill="#C0CBF6"/>
              <path d="m24 37.3333v-3.9111l-10.8444-8.43L24 37.3333Z" fill="white"/>
              <path d="m24 31.2889 10.8444-4.8444-10.8444-4.8444v9.6888Z" fill="#8197EE"/>
              <path d="m13.1556 24.4444 10.8444 4.8444V17.1778l-10.8444 4.8444Z" fill="#C0CBF6"/>
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
            <div style={{ width: '40px' }} />
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
          <div style={iconsContainerStyles}>
            <div style={iconRectangleStyles}>
              <div style={largeAssetIconStyles}>
                {selectedAsset === 'BTC' ? (
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M47.638 14.904C46.906 21.106 40.283 25 33.099 23.806C27.099 22.806 22.999 15.904 24.561 9.904C26.123 3.904 32.561 -1.096 38.561 0.561C44.561 2.218 48.37 8.702 47.638 14.904Z" fill="#F7931A"/>
                    <path d="M41.307 10.361C41.752 8.8 40.361 7.95 38.707 7.39L39.524 5.25L37.961 4.924L37.177 7.01C36.561 6.85 35.923 6.7 35.299 6.55L36.123 4.67L34.561 4.344L33.724 6.48C33.219 6.36 32.725 6.24 32.251 6.11L32.253 6.098L32.528 5.83L32.191 7.22C32.191 7.22 33.138 7.52 33.106 7.54C33.635 7.59 33.725 7.94 33.712 8.21L32.712 10.66C32.774 8.67 32.856 8.69 32.958 8.72C32.882 8.7 32.801 8.68 32.718 8.66L31.218 14.06C31.119 14.22 30.961 14.48 30.361 14.34C30.381 14.36 30.751 14.16 30.751 14.16L30.111 15.66L31.781 16.06C32.061 16.14 32.401 16.22 32.701 16.3L31.961 18.46L33.523 18.786L33.961 16.66C34.161 16.72 34.681 16.82 35.001 16.9L34.461 19.06L36.023 19.386L37.461 17.22C38.481 17.64 40.121 17.32 40.841 15.74C41.381 13.84 40.801 12.92 39.661 12.3C41.061 11.94 41.121 11.54 41.307 10.361ZM38.361 14.56C37.561 16.16 35.281 15.32 34.401 14.94L35.081 12.22C35.961 12.6 38.761 12.88 38.361 14.56ZM38.761 10.36C38.061 11.84 36.161 11.08 35.421 10.9L36.061 8.3C37.801 8.48 39.121 8.82 38.761 10.36Z" fill="white"/>
                  </svg>
                ) : selectedAsset === 'ETH' ? (
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="24" cy="24" r="24" fill="#627EEA"/>
                    <path d="M24 2.66667v11.1778l10.8444 4.8444L24 2.66667Z" fill="#C0CBF6"/>
                    <path d="M24 2.66667 13.1556 19.1111l10.8444-4.84444V2.66667Z" fill="white"/>
                    <path d="M24 33.4222v3.9111l10.8444-7.5111L24 33.4222Z" fill="#C0CBF6"/>
                    <path d="m24 37.3333v-3.9111l-10.8444-8.43L24 37.3333Z" fill="white"/>
                    <path d="m24 31.2889 10.8444-4.8444-10.8444-4.8444v9.6888Z" fill="#8197EE"/>
                    <path d="m13.1556 24.4444 10.8444 4.8444V17.1778l-10.8444 4.8444Z" fill="#C0CBF6"/>
                  </svg>
                ) : (
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="24" cy="24" r="24" fill="#000000"/>
                    <path d="M8.161 14.921a.351.351 0 0 1 .248-.103h21.272a.176.176 0 0 1 .124.3l-2.183 2.183a.351.351 0 0 1-.248.103H6.102a.176.176 0 0 1-.124-.3l2.183-2.183Z" fill="url(#a)"/>
                    <path d="M8.161 6.861a.351.351 0 0 1 .248-.103h21.272a.176.176 0 0 1 .124.3l-2.183 2.183a.351.351 0 0 1-.248.103H6.102a.176.176 0 0 1-.124-.3l2.183-2.183Z" fill="url(#b)"/>
                    <path d="M16.761 10.861a.351.351 0 0 0-.248-.103H5.853a.176.176 0 0 0-.124.3l2.183 2.183a.351.351 0 0 0 .248.103h21.272a.176.176 0 0 0 .124-.3l-2.183-2.183Z" fill="url(#c)"/>
                  </svg>
                )}
              </div>
            </div>
            <div style={arrowContainerStyles}>
              <div style={arrowIconStyles}>
                <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.5 8L4.5 5L1.5 2" stroke="#D1D5DB" strokeWidth="2" strokeLinecap="square"/>
                </svg>
              </div>
              <div style={middleArrowIconStyles}>
                <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 10L6 6L2 2" stroke="#D1D5DB" strokeWidth="2" strokeLinecap="square"/>
                </svg>
              </div>
              <div style={arrowIconStyles}>
                <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.5 8L4.5 5L1.5 2" stroke="#D1D5DB" strokeWidth="2" strokeLinecap="square"/>
                </svg>
              </div>
            </div>
            <div style={iconRectangleStyles}>
              <div style={rampLogoContainerStyles}>
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M18.0148 1.65554C17.141 0.781488 15.7244 0.781488 14.8506 1.65554L2.09284 14.4173C1.21908 15.2914 1.21908 16.7085 2.09284 17.5826L14.8506 30.3444C15.7244 31.2184 17.141 31.2184 18.0148 30.3444L23.5626 24.7948L16.3524 17.5826C15.4787 16.7085 15.4787 15.2914 16.3524 14.4173L23.5625 7.20515L18.0148 1.65554Z" fill="#00A754"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M32.2744 1.65554C31.4006 0.781488 29.984 0.781488 29.1102 1.65554L23.5625 7.20515L30.7726 14.4173C31.6464 15.2914 31.6464 16.7085 30.7726 17.5826L23.5625 24.7948L29.1102 30.3444C29.984 31.2184 31.4006 31.2184 32.2744 30.3444L45.0321 17.5826C45.9059 16.7085 45.9059 15.2914 45.0321 14.4173L32.2744 1.65554Z" fill="#0A6E5C"/>
                </svg>
              </div>
            </div>
          </div>
          <div style={drawerContentStyles}>
            <div style={addressContainerStyles}>
              <div style={addressLabelStyles}>Exact {selectedAsset} amount to send</div>
              <div style={inputContainerStyles}>
                <div style={assetIconStyles}>
                  {selectedAsset === 'BTC' ? (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M23.638 14.904C22.906 21.106 16.283 25 9.099 23.806C3.099 22.806 -1.001 15.904 0.561 9.904C2.123 3.904 8.561 -1.096 14.561 0.561C20.561 2.218 24.37 8.702 23.638 14.904Z" fill="#F7931A"/>
                      <path d="M17.307 10.361C17.752 8.8 16.361 7.95 14.707 7.39L15.524 5.25L13.961 4.924L13.177 7.01C12.561 6.85 11.923 6.7 11.299 6.55L12.123 4.67L10.561 4.344L9.724 6.48C9.219 6.36 8.725 6.24 8.251 6.11L8.253 6.098L8.528 5.83L8.191 7.22C8.191 7.22 9.138 7.52 9.106 7.54C9.635 7.59 9.725 7.94 9.712 8.21L8.712 10.66C8.774 8.67 8.856 8.69 8.958 8.72C8.882 8.7 8.801 8.68 8.718 8.66L7.218 14.06C7.119 14.22 6.961 14.48 6.361 14.34C6.381 14.36 6.751 14.16 6.751 14.16L6.111 15.66L7.781 16.06C8.061 16.14 8.401 16.22 8.701 16.3L7.961 18.46L9.523 18.786L9.961 16.66C10.161 16.72 10.681 16.82 11.001 16.9L10.461 19.06L12.023 19.386L13.461 17.22C14.481 17.64 16.121 17.32 16.841 15.74C17.381 13.84 16.801 12.92 15.661 12.3C17.061 11.94 17.121 11.54 17.307 10.361ZM14.361 14.56C13.561 16.16 11.281 15.32 10.401 14.94L11.081 12.22C11.961 12.6 14.761 12.88 14.361 14.56ZM14.761 10.36C14.061 11.84 12.161 11.08 11.421 10.9L12.061 8.3C13.801 8.48 15.121 8.82 14.761 10.36Z" fill="white"/>
                    </svg>
                  ) : selectedAsset === 'ETH' ? (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="12" fill="#627EEA"/>
                      <path d="M12 3.33334v6.17778l5.42222 2.42222L12 3.33334Z" fill="#C0CBF6"/>
                      <path d="M12 3.33334 6.57778 12.2222l5.42222-2.42222V3.33334Z" fill="white"/>
                      <path d="M12 33.4222v3.9111l5.42222-7.5111L12 33.4222Z" fill="#C0CBF6"/>
                      <path d="m12 37.3333v-3.9111l-5.42222-8.43L12 37.3333Z" fill="white"/>
                      <path d="m12 31.2889 5.42222-4.8444-5.42222-4.8444v9.6888Z" fill="#8197EE"/>
                      <path d="m6.57778 24.4444 5.42222 4.8444V17.1778l-5.42222 4.8444Z" fill="#C0CBF6"/>
                    </svg>
                  ) : (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="12" fill="#000000"/>
                      <path d="M8.161 14.921a.351.351 0 0 1 .248-.103h21.272a.176.176 0 0 1 .124.3l-2.183 2.183a.351.351 0 0 1-.248.103H6.102a.176.176 0 0 1-.124-.3l2.183-2.183Z" fill="url(#a)"/>
                      <path d="M8.161 6.861a.351.351 0 0 1 .248-.103h21.272a.176.176 0 0 1 .124.3l-2.183 2.183a.351.351 0 0 1-.248.103H6.102a.176.176 0 0 1-.124-.3l2.183-2.183Z" fill="url(#b)"/>
                      <path d="M16.761 10.861a.351.351 0 0 0-.248-.103H5.853a.176.176 0 0 0-.124.3l2.183 2.183a.351.351 0 0 0 .248.103h21.272a.176.176 0 0 0 .124-.3l-2.183-2.183Z" fill="url(#c)"/>
                    </svg>
                  )}
                </div>
                <div style={addressValueStyles}>
                  {assetValue}
                </div>
                <button style={copyButtonStyles}>
                  Copy
                </button>
              </div>
            </div>
            <div style={addressContainerStyles}>
              <div style={addressLabelStyles}>Ramp Network's ETH wallet address</div>
              <div style={inputContainerStyles}>
                <div style={assetIconStyles}>
                  <svg width="23" height="16" viewBox="0 0 23 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M9.00741 0.827768C8.57052 0.390744 7.86218 0.390744 7.4253 0.827769L1.04642 7.20866C0.609528 7.64568 0.609528 8.35424 1.04642 8.79127L7.4253 15.1722C7.86218 15.6092 8.57052 15.6092 9.00741 15.1722L11.7813 12.3974L8.17621 8.79122C7.73932 8.35419 7.73932 7.64564 8.17621 7.20861L11.7812 3.60246L9.00741 0.827768Z" fill="#00A754"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M16.1372 0.827768C15.7003 0.390744 14.992 0.390744 14.5551 0.827769L11.7813 3.60245L15.3863 7.20861C15.8232 7.64564 15.8232 8.35419 15.3863 8.79122L11.7812 12.3974L14.5551 15.1722C14.992 15.6092 15.7003 15.6092 16.1372 15.1722L22.5161 8.79126C22.953 8.35424 22.953 7.64568 22.5161 7.20866L16.1372 0.827768Z" fill="#0A6E5C"/>
                  </svg>
                </div>
                <div style={addressValueStyles}>
                  0x1234567890123456789012345678901234567890
                </div>
                <button style={copyButtonStyles}>
                  Copy
                </button>
              </div>
            </div>
            <div style={helpTextContainerStyles}>
              <span style={helpTextStyles}>Need help sending crypto?</span>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.6458 8.16667V11.8125H2.1875V3.35417H5.39583M8.02083 2.1875H11.8125M11.8125 2.1875V5.97917M11.8125 2.1875L6.41667 7.58333" stroke="#6B7280" strokeWidth="0.875" strokeLinecap="square"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Status; 