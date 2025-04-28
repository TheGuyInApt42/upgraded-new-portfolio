import { supabase } from '$lib/supabase';
import { BREVO_API_KEY } from '$env/static/private';

type LeadPayload = {
  name: string;
  email: string;
	company: string;
	phone: string;
  message: string;
  form_type: string;
  submitted_at: string;
  selected_plan?: string;
};

interface BrevoContactParams {
  name: string;
  email: string;
  phone: string;
  company: string;
  selected_plan?: string;
  form_type: string;
  niche?: string;
}

// Define a specific return type for the Brevo API response
interface BrevoApiResponse {
  id: number;
  email: string;
  emailBlacklisted: boolean;
  smsBlacklisted: boolean;
  createdAt: string;
  modifiedAt: string;
  listIds: number[];
}

async function addContactToBrevo({
  name,
  email,
  phone,
  company,
  selected_plan,
  form_type,
  niche = 'landscaping'
}: BrevoContactParams): Promise<BrevoApiResponse> {
  const response = await fetch('https://api.brevo.com/v3/contacts', {
    method: 'POST',
    headers: {
      'api-key': BREVO_API_KEY,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email,
      attributes: {
        FIRSTNAME: name,
        COMPANY: company,
        PHONE: phone,
        FORM_TYPE: form_type,
        SELECTED_PLAN: selected_plan,
        NICHE: niche
      },
      listIds: [5], // your MAIN Brevo list ID
      updateEnabled: true
    })
  });

  if (!response.ok) {
    const errorData = await response.json();
    console.error('Brevo add contact error:', errorData);
    throw new Error('Failed to add contact to Brevo');
  }

  return await response.json();
}

/** @type {import('./$types').Actions} */
export const actions = {
	// First, let's update the 'question' action
question: async ({ request }) => {
  const data = await request.formData();
  const formEntries = Object.fromEntries(data.entries());

  // Bot detection via honeypot
  if (formEntries.website) {
    console.warn('Bot detected via honeypot.');
    return { success: true };
  }

  // Extract and sanitize inputs
  const name = formEntries.name as string;
  const email = formEntries.email as string;
  const question = formEntries.question as string;
  const form_type = (formEntries.form_type as string) || 'question';

  const payload: Partial<LeadPayload> = {
    name,
    email,
    message: question,
    form_type: form_type || 'question'
  };

  // Insert to Supabase
  const { error } = await supabase.from('leads').insert([payload]);
  
  if (error) {
    console.error('Supabase insert error:', error.message);
    return {
      success: false,
      error: 'Submission failed. Please try again.'
    };
  }
  
  // After successful Supabase insert, add contact to Brevo
  try {
    await addContactToBrevo({
      name,
      email,
      phone: '',
      company: '',
      selected_plan: '',
      form_type
    });
  } catch (brevoError) {
    console.error('Brevo API error:', brevoError);
    // We still return success since the Supabase insert worked
  }

  return {
    success: true,
    message: 'Yay! Form submitted successfully 🎉'
  };
},

// Next, update the 'contact' action
contact: async ({ request }) => {
  const data = await request.formData();
  const formEntries = Object.fromEntries(data.entries());

  // Bot detection via honeypot
  if (formEntries.website) {
    console.warn('Bot detected via honeypot.');
    return { success: true };
  }

  // Extract and sanitize inputs
  const name = formEntries.name as string;
  const email = formEntries.email as string;
  const company = formEntries.company as string;
  const phone = formEntries.phone as string;
  const question = formEntries.message as string;
  const form_type = (formEntries.form_type as string) || 'contact';

  const payload: Partial<LeadPayload> = {
    name,
    email,
    company,
    phone,
    message: question,
    form_type: form_type || 'contact'
  };

  // Insert to Supabase
  const { error } = await supabase.from('leads').insert([payload]);

  if (error) {
    console.error('Supabase insert error:', error.message);
    return {
      success: false,
      error: 'Submission failed. Please try again.'
    };
  }
  
  // After successful Supabase insert, add contact to Brevo
  try {
    await addContactToBrevo({
      name,
      email,
      phone,
      company,
      selected_plan: '',
      form_type
    });
  } catch (brevoError) {
    console.error('Brevo API error:', brevoError);
    // We still return success since the Supabase insert worked
  }

  return {
    success: true,
    message: 'Yay! Form submitted successfully 🎉'
  };
},

// Finally, update the 'interest' action
interest: async ({ request }) => {
  const data = await request.formData();
  const formEntries = Object.fromEntries(data.entries());

  // Bot detection via honeypot
  if (formEntries.website) {
    console.warn('Bot detected via honeypot.');
    return { success: true };
  }

  // Extract and sanitize inputs
  const name = formEntries.name as string;
  const email = formEntries.email as string;
  const phone = formEntries.phone as string;
  const selected_plan = (formEntries.selected_plan as string);
  const form_type = (formEntries.form_type as string) || 'interest';

  const payload: Partial<LeadPayload> = {
    name,
    email,
    phone,
    selected_plan,
    form_type: form_type || 'interest'
  };

  // Insert to Supabase
  const { error } = await supabase.from('leads').insert([payload]);

  if (error) {
    console.error('Supabase insert error:', error.message);
    return {
      success: false,
      error: 'Submission failed. Please try again.'
    };
  }
  
  // After successful Supabase insert, add contact to Brevo
  try {
    await addContactToBrevo({
      name,
      email,
      phone,
      company: '',
      selected_plan,
      form_type
    });
  } catch (brevoError) {
    console.error('Brevo API error:', brevoError);
    // We still return success since the Supabase insert worked
  }

  return {
    success: true,
    message: 'Yay! Form submitted successfully 🎉'
  };
}
};
