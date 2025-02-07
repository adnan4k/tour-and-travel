import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const LoadingContext = createContext({
  loading: false,
});

export const LoadingProvider = ({ children }) => {
  const [loadingCount, setLoadingCount] = useState(0);

  const incrementLoading = () =>
    setLoadingCount((count) => count + 1);
  const decrementLoading = () =>
    setLoadingCount((count) => Math.max(count - 1, 0));

  useEffect(() => {
    // Request interceptor: show spinner
    const requestInterceptor = axios.interceptors.request.use(
      (config) => {
        incrementLoading();
        return config;
      },
      (error) => {
        decrementLoading();
        return Promise.reject(error);
      }
    );

    // Response interceptor: hide spinner
    const responseInterceptor = axios.interceptors.response.use(
      (response) => {
        decrementLoading();
        return response;
      },
      (error) => {
        decrementLoading();
        return Promise.reject(error);
      }
    );

    // Cleanup interceptors on unmount
    return () => {
      axios.interceptors.request.eject(requestInterceptor);
      axios.interceptors.response.eject(responseInterceptor);
    };
  }, []);

  return (
    <LoadingContext.Provider value={{ loading: loadingCount > 0 }}>
      {children}
    </LoadingContext.Provider>
  );
}; 