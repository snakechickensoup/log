'use client';

export const getLocalStorage = (key: string) => {
  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : null;
};

export const setLocalStorage = <T>(key: string, value: T) => {
  const item = JSON.stringify(value);
  localStorage.setItem(key, item);
};

export const removeLocalStorage = (key: string) => {
  localStorage.removeItem(key);
};
