const reportWebVitals = onPerfEntry => {
  // Check if onPerfEntry is provided and is a function
  if (onPerfEntry && typeof onPerfEntry === 'function') {
    // Dynamically import the web-vitals library
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      // Call the performance metrics functions with the callback
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
