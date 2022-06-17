import { useState, useEffect } from 'react';

function getStorageValue(key: string): string[] {
  const saved = localStorage.getItem(key);
  if (saved) {
    return JSON.parse(saved);
  }
  return [];
}

function setStorageValue(key: string, data: string[]): void {
  localStorage.setItem(key, JSON.stringify(data));
}

export const useLocalStorage = (
  key: string
): [string[], React.Dispatch<React.SetStateAction<string[]>>] => {
  const [value, setValue] = useState<string[]>([]);

  useEffect(() => {
    setValue(getStorageValue(key));
  }, [key]);

  useEffect(() => {
    setStorageValue(key, value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return [value, setValue];
};
