import { useEffect } from 'react';

// Google Analytics 4 Configuration
const GA_TRACKING_ID = process.env.REACT_APP_GA_TRACKING_ID || 'G-XXXXXXXXXX';

// Google Analytics 4 Functions
export const gtag = (...args) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag(...args);
  }
};

export const pageview = (url) => {
  gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};

export const event = ({ action, category, label, value }) => {
  gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

// Track CTA button clicks
export const trackCTAClick = (buttonName, location) => {
  event({
    action: 'cta_click',
    category: 'engagement',
    label: `${buttonName} - ${location}`,
  });
};

// Track section views
export const trackSectionView = (sectionName) => {
  event({
    action: 'section_view',
    category: 'engagement',
    label: sectionName,
  });
};

// Track user interactions
export const trackUserInteraction = (interactionType, details) => {
  event({
    action: 'user_interaction',
    category: 'engagement',
    label: `${interactionType} - ${details}`,
  });
};

// Track chart interactions
export const trackChartInteraction = (chartType, action) => {
  event({
    action: 'chart_interaction',
    category: 'dashboard',
    label: `${chartType} - ${action}`,
  });
};

// Performance tracking
export const trackPerformance = () => {
  if (typeof window !== 'undefined' && 'performance' in window) {
    window.addEventListener('load', () => {
      const perfData = performance.getEntriesByType('navigation')[0];
      
      // Track page load time
      event({
        action: 'page_load_time',
        category: 'performance',
        label: 'load_complete',
        value: Math.round(perfData.loadEventEnd - perfData.loadEventStart),
      });
      
      // Track First Contentful Paint
      const fcpEntry = performance.getEntriesByName('first-contentful-paint')[0];
      if (fcpEntry) {
        event({
          action: 'first_contentful_paint',
          category: 'performance',
          label: 'fcp',
          value: Math.round(fcpEntry.startTime),
        });
      }
    });
  }
};

// Initialize Google Analytics
export const initGA = () => {
  // Only initialize in production and if tracking ID is provided
  if (process.env.NODE_ENV === 'production' && GA_TRACKING_ID && GA_TRACKING_ID !== 'G-XXXXXXXXXX') {
    // Create script tag for Google Analytics
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
    document.head.appendChild(script);
    
    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    window.gtag = function() {
      window.dataLayer.push(arguments);
    };
    
    gtag('js', new Date());
    gtag('config', GA_TRACKING_ID, {
      anonymize_ip: true,
      send_page_view: false, // We'll send page views manually
    });
    
    // Track initial page view
    pageview(window.location.pathname + window.location.search);
    
    // Initialize performance tracking
    trackPerformance();
    
    console.log('Google Analytics initialized with ID:', GA_TRACKING_ID);
  } else {
    console.log('Google Analytics not initialized (development mode or missing tracking ID)');
  }
};

// React Hook for Analytics
export const useAnalytics = () => {
  useEffect(() => {
    initGA();
  }, []);

  return {
    trackCTAClick,
    trackSectionView,
    trackUserInteraction,
    trackChartInteraction,
    pageview,
    event,
  };
};

// HOC to track section views automatically
export const withSectionTracking = (WrappedComponent, sectionName) => {
  return function TrackedSection(props) {
    useEffect(() => {
      trackSectionView(sectionName);
    }, []);

    return <WrappedComponent {...props} />;
  };
};

// Custom hook for intersection observer with analytics
export const useInViewAnalytics = (sectionName, options = {}) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            trackSectionView(sectionName);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.5,
        ...options,
      }
    );

    const element = document.querySelector(`[data-section="${sectionName}"]`);
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [sectionName, options]);
};

const AnalyticsSetup = {
  initGA,
  useAnalytics,
  trackCTAClick,
  trackSectionView,
  trackUserInteraction,
  trackChartInteraction,
  pageview,
  event,
  withSectionTracking,
  useInViewAnalytics,
};

export default AnalyticsSetup; 