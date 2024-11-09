
import { FormData } from "@/utils/types";

export const createContact = async(contactInfo:FormData) =>{
try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contactInfo),
    });

    const result = await response.json();
    return result
    
  } catch (error) {
    console.error("Error submitting contact data:", error);
  }
}

