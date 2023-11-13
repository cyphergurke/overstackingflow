import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getTimeStamp = (createdAt: Date): string => {
  const now = new Date();
  const timeDifference = now.getTime() - createdAt.getTime();

  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(months / 12);

  if (years > 0) {
    return `${years} ${years === 1 ? 'Year' : 'Years'} ago`;
  } else if (months > 0) {
    return `${months} ${months === 1 ? 'Month' : 'Months'} ago`;
  } else if (days > 0) {
    return `${days} ${days === 1 ? 'Day' : 'Days'} ago`;
  } else if (hours > 0) {
    return `${hours} ${hours === 1 ? 'Hour' : 'Hours'} ago`;
  } else if (minutes > 0) {
    return `${minutes} ${minutes === 1 ? 'Minute' : 'Minutes'} ago`;
  } else {
    return `${seconds} ${seconds === 1 ? 'Second' : 'Seconds'} ago`;
  }
};

export const formatNumber = (num: number): string => {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M';
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K';
  } else {
    return num.toString();
  }
}
