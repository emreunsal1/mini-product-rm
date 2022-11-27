export const checkStringEqual = (a: string, b: string) => a === b;

export const formatPrice = (price: number | string, currency = 'TL') => `${price} ${currency}`;

export const detectUserCloseTab = (isRememberMeActive = false) => {
  if (!isRememberMeActive) {
    if (typeof window !== 'undefined') {
      window.addEventListener('unload', () => {
        document.cookie = 'token=; Max-Age=-99999999;';
      });
    }
  }
};
