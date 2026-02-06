import { ArrowRightEndOnRectangleIcon, EnvelopeIcon, LockClosedIcon } from "@heroicons/react/16/solid";
import { useNavigate } from "react-router-dom";


export const RegisterForm = () => {
  const navigate = useNavigate();

  const backToLogin = () => {
    navigate('/login');
  }
  
  return (
    <form className='flex flex-col mt-3'>
      <div className='relative m-3'>
        <EnvelopeIcon className='w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2' />
        <input
          type="email"
          placeholder="Email"
          className="bg-white border p-3 pl-10 rounded-[10px] w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <div className='relative m-3'>
        <LockClosedIcon className='w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2' />
        <input
          type="password"
          placeholder="Password"
          className="bg-white border p-3 pl-10 rounded-[10px] w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <div className='flex flex-col m-3 gap-3'>
        <button type="submit" className='flex justify-center items-center bg-[#7cd4e2] border p-3 rounded-[10px] w-full text-white font-[700] transition duration-200 hover:bg-[#5fc1d1]'>
          Тіркелу
          <ArrowRightEndOnRectangleIcon className='w-5 h-5 pl-1' />
        </button>
      </div>

      <div className='flex flex-col m-3 gap-3'>
        <button type="submit" onClick={backToLogin} className='flex justify-center items-center bg-none border p-3 rounded-[10px] w-full text-white font-[700] transition duration-200 hover:bg-[#5fc1d1]'>
          Кіру
          <ArrowRightEndOnRectangleIcon className='w-5 h-5 pl-1' />
        </button>
      </div>
    </form>
  );
};
