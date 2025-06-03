declare global {
  interface Window {
    gtag: (
      command: string,
      action: string,
      params?: {
        page_path?: string;
        page_title?: string;
        [key: string]: any;
      }
    ) => void;
  }
}

export const useAnalytics = () => {
  const trackPageView = (path: string, title: string) => {
    window.gtag('config', 'G-0Q2PZH6FR0', {
      page_path: path,
      page_title: title,
    });
  };

  const trackEvent = (action: string, params?: { [key: string]: any }) => {
    window.gtag('event', action, params);
  };

  return {
    trackPageView,
    trackEvent,
  };
}; 