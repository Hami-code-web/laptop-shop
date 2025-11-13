import { useState, useEffect } from 'react';
import { auth, db } from '../../constants/firebase';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import {
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import { FaGoogle } from 'react-icons/fa';
import { useNavigate, Link } from 'react-router-dom';
import Spinner from '../../components/loading/spinner';
import { toast } from 'react-toastify';

const translateFirebaseError = (code) => {
  const errors = { email: '', pass: '' };

  if (code === 'auth/email-already-in-use') {
    errors.email = 'این ایمیل قبلاً ثبت شده است.';
  }
  if (code === 'auth/invalid-email') {
    errors.email = 'ایمیل وارد شده نامعتبر است.';
  }
  if (code === 'auth/missing-password') {
    errors.pass = 'رمز عبور خود را وارد کنید';
  }
  if (code === 'auth/weak-password') {
    errors.pass = 'رمز عبور باید حداقل 6 کاراکتر باشد.';
  }
  if (code === 'auth/missing-email') {
    errors.email = 'لطفاً ایمیل را وارد کنید.';
  }
  if (code === 'auth/internal-error') {
    errors.email = 'خطای داخلی رخ داده است. لطفاً دوباره تلاش کنید.';
  }

  return errors;
};

const SignUp = () => {
  const [internetError, setInternetError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const [Fname, setFname] = useState('');
  const [Lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const [errors, setErrors] = useState({
    fname: '',
    lname: '',
    email: '',
    pass: '',
  });

  const navigate = useNavigate();

  const handleGoogleSignUp = async () => {
    const googleProvider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      const userData = doc(db, 'users', user.uid);
      const userSnap = await getDoc(userData);

      if (!userSnap.exists()) {
        await setDoc(userData, {
          firstName: user.displayName?.split(' ')[0] || '',
          lastName: user.displayName?.split(' ')[1] || '',
          email: user.email,
          createdAt: new Date(),
        });
      }

      toast.success('با موفقیت با گوگل وارد شدید');
      navigate('/');
    } catch (error) {
      console.error(error);
      toast.error('خطای ورود با گوگل');
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    setErrors({ fname: '', lname: '', email: '', pass: '' });

    const newErrors = { fname: '', lname: '', email: '', pass: '' };
    if (!Fname.trim()) newErrors.fname = 'نام را وارد کنید';
    if (!Lname.trim()) newErrors.lname = 'نام خانوادگی را وارد کنید';
    if (!email.trim()) newErrors.email = 'ایمیل را وارد کنید';
    if (!pass.trim()) newErrors.pass = 'رمز عبور را وارد کنید';

    const hasError = Object.values(newErrors).some((err) => err !== '');
    if (hasError) {
      setErrors(newErrors);
      setIsLoading(false);
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        pass
      );
      const user = userCredential.user;

      await setDoc(doc(db, 'users', user.uid), {
        firstName: Fname,
        lastName: Lname,
        email: user.email,
        createdAt: new Date(),
      });

      setInternetError('');
      toast.success('اکانت با موفقیت ساخته شد');
      setTimeout(() => navigate('/login'), 1500);
    } catch (err) {
      console.error('Signup error:', err);

      if (
        err.code === 'auth/network-request-failed' ||
        err.message?.includes('Failed to fetch') ||
        err.message?.includes('NetworkError')
      ) {
        setInternetError('لطفا به اینترنت متصل شوید');
        setTimeout(() => setInternetError(''), 5000);
      }

      const translatedErrors = translateFirebaseError(err.code);
      setErrors((prev) => ({ ...prev, ...translatedErrors }));
    } finally {
      setIsLoading(false);
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
        onSubmit={handleSignup}
        className="w-full max-w-md bg-[#393E46] text-[#DCD7C9] space-y-4 p-6 rounded-2xl shadow text-sm sm:text-base md:text-lg"
      >
        <h1 className="font-semibold text-center text-lg sm:text-xl md:text-2xl">
          ساخت حساب کاربری
        </h1>

        <div>
          <input
            className="outline-none border-b border-white w-full p-2 bg-transparent"
            placeholder="نام"
            onChange={(e) => setFname(e.target.value)}
            value={Fname}
          />
          {errors.fname && (
            <p className="text-red-500 text-xs">{errors.fname}</p>
          )}
        </div>

        <div>
          <input
            className="outline-none border-b border-white w-full p-2 bg-transparent"
            placeholder="نام خانوادگی"
            onChange={(e) => setLname(e.target.value)}
            value={Lname}
          />
          {errors.lname && (
            <p className="text-red-500 text-xs">{errors.lname}</p>
          )}
        </div>

        <div>
          <input
            className="outline-none border-b border-white w-full p-2 bg-transparent"
            placeholder="ایمیل"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          {errors.email && (
            <p className="text-red-500 text-xs">{errors.email}</p>
          )}
        </div>

        <div>
          <input
            type="password"
            className="outline-none border-b border-white w-full p-2 bg-transparent"
            placeholder="رمز عبور"
            onChange={(e) => setPass(e.target.value)}
            value={pass}
          />
          {errors.pass && <p className="text-red-500 text-xs">{errors.pass}</p>}
        </div>

        <button
          disabled={isLoading}
          className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
          type="submit"
        >
          {!isLoading ? 'ثبت نام' : <Spinner />}
        </button>

        <div className="py-3 flex items-center text-sm text-white uppercase before:flex-1 before:border-t before:border-gray-200 before:me-6 after:flex-1 after:border-t after:border-gray-200 after:ms-6 dark:text-neutral-500 dark:before:border-neutral-600 dark:after:border-neutral-600">
          یا
        </div>
        <button
          type="button"
          onClick={handleGoogleSignUp}
          className="group flex justify-center items-center gap-3 border rounded py-2 w-full my-2 text-sm sm:text-base hover:bg-gray-50 hover:border-gray-400 transition-all duration-200"
        >
          <FaGoogle className="text-gray-500 group-hover:text-red-500 transition-colors duration-200" />
          <span className="transition-colors duration-200 group-hover:text-black">
            ورود با گوگل
          </span>
        </button>

        <div className="flex justify-center">
          <Link to="/login" className="underline">
            قبلا حساب ساخته‌اید؟ وارد شوید
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
