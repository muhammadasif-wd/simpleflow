import React, { useState } from 'react';
import DefaultButton from '../../shared/DefaultButton';
import { Icon } from '@iconify/react';

const LogInCard = () => {
  const [showPassword, setShowPassword] = useState()
  
  const togglePassword = ()=>{
    setShowPassword(!showPassword)
  }
  const handelLogIn =  (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email,password);
  }
    return (
       <div className='m-40 flex justify-center'>
         <form onSubmit={handelLogIn} className='border-2 border-dark p-16 rounded'>
          <h1 className='text-center font-bold text-2xl'>Log In</h1>
            <div>
                <div className='my-2'>
                  <span className="label-text">Email<span className='text-secondaryColor'>*</span></span>
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input border-b-2 border-dark select-none"
                  required
                />
              </div>
            <div className=" my-6">
                <div className='my-2'>
                  <span className="label-text">password<span className='text-secondaryColor'>*</span></span>
                </div>
                <input
                  type={showPassword? "text": "password"}
                  name="password"
                  placeholder="password"
                  className="input border-b-2 border-dark"
                  required
                />
                <div onClick={togglePassword} className='flex justify-end'>
                <Icon className=' -mt-5' icon={showPassword? "mdi:eye-off":"mdi:eye"} />
                </div>
              </div>
              <div >
                <DefaultButton name='logIn' styles='w-full'  />
              </div>
        </form>
       </div>
    );
};

export default LogInCard;