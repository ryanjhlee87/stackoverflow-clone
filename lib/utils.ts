import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getTimestamp = (createdAt: Date): string => {
  // Convert the createdAt date to a timestamp in milliseconds
  const createdAtTimestamp = createdAt.getTime();

  // Get the current timestamp in milliseconds
  const currentTimestamp = new Date().getTime();

  // Calculate the time difference in milliseconds
  const timeDifference = currentTimestamp - createdAtTimestamp;

  // Define the time units and their respective milliseconds values
  const timeUnits = [
    { unit: 'year', value: 365 * 24 * 60 * 60 * 1000 },
    { unit: 'month', value: 30 * 24 * 60 * 60 * 1000 },
    { unit: 'week', value: 7 * 24 * 60 * 60 * 1000 },
    { unit: 'day', value: 24 * 60 * 60 * 1000 },
    { unit: 'hour', value: 60 * 60 * 1000 },
    { unit: 'minute', value: 60 * 1000 },
    { unit: 'second', value: 1000 },
  ];

  // Iterate through time units to find the appropriate unit
  for (const { unit, value } of timeUnits) {
    const unitCount = Math.floor(timeDifference / value);
    if (unitCount > 0) {
      return `${unitCount} ${unit}${unitCount > 1 ? 's' : ''}`;
    }
  }

  // If the time difference is less than a second, return "just now"
  return 'just now';
};

export const formatNumberWithExtension = (number: number): string => {
  let result = '';

  if (Math.abs(number) >= 1e6) {
    result = Math.floor(number / 1e6) + 'M';
  } else if (Math.abs(number) >= 1e3) {
    result = Math.floor(number / 1e3) + 'K';
  } else {
    result = number.toString();
  }

  return result;
};
