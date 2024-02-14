import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { createClient } from '@supabase/supabase-js';
import { useEffect } from 'react';

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_KEY;

const Login = () => {
  const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
  const signUp = async () => {
    const { data } = await supabase.auth.getSession();
    console.log(data);
  };

  useEffect(() => {
    signUp();
  }, []);

  return <div>Login</div>;
  // return <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />;
};

export default Login;
