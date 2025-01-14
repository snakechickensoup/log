'use client';

import { useState } from 'react';
import { getLocalStorage, setLocalStorage } from '@/lib/storage';

export const useLocalStorage = <T>(key: string, initialValue: T) => {
  const item = getLocalStorage(key) as T;

  const [storageItem, setStorageItem] = useState<T>(item || initialValue);

  const handleStorageItem = (value: T) => {
    setStorageItem(value);
    setLocalStorage<T>(key, value);
  };

  return [storageItem, handleStorageItem] as const;
};
