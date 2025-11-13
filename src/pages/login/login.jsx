import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../constants/firebase';
import { toast } from 'react-toastify';
import Spinner from '../../components/loading/spinner';

const Login = () => {
  const [internetError, setInternetError] = useState();
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [errors, setErrors] = useState({ email: '', pass: '' });
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrors({ email: '', pass: '' });

    if (!email.trim() || !pass.trim()) {
      if (!email.trim())
        setErrors((prev) => ({ ...prev, email: ' ایمیل خود را وارد کنید' }));
      if (!pass.trim())
        setErrors((prev) => ({ ...prev, pass: ' رمز عبور خود را وارد کنید' }));
      return;
    }

    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email.trim(), pass.trim());
      toast.success('با موفقیت وارد شدید');
      navigate('/');
    } catch (err) {
      console.log(err.code);
      if (err.code === 'auth/network-request-failed') {
        setInternetError('لطفا به اینترنت متصل شوید');
        setTimeout(() => setInternetError(''), 5000);
        return;
      }
      toast.error('رمز عبور یا ایمیل اشتباه است');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen grid place-items-center bg-[#222831] px-4">
      {internetError && (
        <div className="fixed top-0 right-0 left-0 bg-red-600 text-white text-sm py-2 px-4 z-50 text-center shadow-md">
          {internetError}
        </div>
      )}
      <form
        onSubmit={handleLogin}
        className="w-full max-w-md bg-[#393E46] text-[#DCD7C9] space-y-4 p-6 rounded-2xl shadow text-sm sm:text-base md:text-lg"
      >
        <h1 className="font-semibold text-center text-lg sm:text-xl md:text-2xl">
          ورود حساب کاربری
        </h1>

        <div>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="outline-none border-b border-white w-full p-2 bg-transparent"
            placeholder="ایمیل"
          />
          {errors.email && (
            <p className="text-red-400 text-sm">{errors.email}</p>
          )}
        </div>

        <div>
          <input
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            className="outline-none border-b border-white w-full p-2 bg-transparent"
            type="password"
            placeholder="رمز عبور"
          />
          {errors.pass && <p className="text-red-400 text-sm">{errors.pass}</p>}
        </div>

        <button
          disabled={loading}
          className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-200 text-sm sm:text-base"
          type="submit"
        >
          {!loading ? 'ورود' : <Spinner />}
        </button>

        <div className="flex justify-center">
          <Link to="/signup" className="font-light text-md underline">
            اگر اکانت ندارید؟ اکانت بسازید
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
