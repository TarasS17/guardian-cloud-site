
import { LeadData } from '../types';

export const submitLead = async (data: LeadData): Promise<void> => {
  // IMPORTANT: Corrected for Next.js client-side environment variables
  const endpoint = process.env.NEXT_PUBLIC_LEAD_SUBMIT_URL;
  
  if (!endpoint) {
    console.warn("Lead submission URL is not configured. Please set NEXT_PUBLIC_LEAD_SUBMIT_URL. Form data will be logged to console instead.");
    console.log("Lead Data (not submitted):", data);
    // In a real app, you might want to return a specific error or handle this gracefully.
    // For now, we'll just log it and pretend it succeeded.
    return;
  }

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
      mode: 'cors',
    });

    if (!response.ok) {
      const errorBody = await response.text();
      throw new Error(`Network response was not ok: ${response.status} ${response.statusText} - ${errorBody}`);
    }

    console.log('Lead submitted successfully:', await response.json());
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
    throw error;
  }
};
