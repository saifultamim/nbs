


import { FormData } from "@/utils/types";

export const createQuestion = async(question:FormData) =>{

try {

    const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/question`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(question),
    });

    const result = await response.json();
    return result
    
  } catch (error) {
    console.error("Error submitting question data:", error);
  }
}

