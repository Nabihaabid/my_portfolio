import { supabase } from '@/lib/supabase';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return Response.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return Response.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    // Insert into Supabase
    const { data, error } = await supabase
      .from('contact_submissions')
      .insert([
        {
          name: name.trim(),
          email: email.trim().toLowerCase(),
          message: message.trim(),
          submitted_at: new Date().toISOString(),
        },
      ])
      .select();

    if (error) {
      console.error('Supabase error:', error);
      return Response.json(
        { error: 'Failed to save your message. Please try again.' },
        { status: 500 }
      );
    }

    return Response.json(
      { success: true, message: 'Your message has been received! I\'ll get back to you soon.' },
      { status: 200 }
    );
  } catch (err) {
    console.error('API error:', err);
    return Response.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}
