import { useRef } from "react";

export function useDebounce<T extends (...args: any[]) => void>(
  callback: T,
  delay = 300
) {
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  function debounced(...args: Parameters<T>) {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => callback(...args), delay);
  }

  return debounced;
}
