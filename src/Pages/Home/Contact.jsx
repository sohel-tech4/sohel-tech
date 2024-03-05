import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import { FaEnvelope, FaFacebook, FaGithub, FaLinkedinIn, FaLocationArrow, FaMailBulk, FaPhone, FaTelegram, FaWhatsapp } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_mrli3ru', 'template_jbtj7dy', form.current, 'aeQ5q_sqJeh1LQ2II')
      .then((result) => {
        console.log(result.text);

        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your message has been send',
          showConfirmButton: false,
          timer: 1500,
          className: "bg-black"
        })
        form.current.reset();
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  return (
    <div className="container mx-auto pt-24 pb-10"> 
      <h1 className='text-2xl md:text-4xl text-center font-semibold'>Let's Talk</h1>
      <h1 className='mb-5 mt-5 text-xl md:text-2xl  text-center font-semibold px-5'>Have You Any Question <span className='text-green-500'>I'M AT YOUR SERVICES</span></h1>
      <div className="hero-content p-0 flex-col-reverse lg:flex-row gap-10">
        <div className='md:visible'>
          <div
            data-aos="fade-left"
            data-aos-offset="100"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"

            className="text-left">
            <div className='flex gap-5 items-center mb-3'>
              <h1 className='text-green-500 text-xl bg-green-600 bg-opacity-10 p-2 p-4 rounded-lg'><FaPhone></FaPhone></h1>
              <div className='justify-start'>
                <p>+8801776462919</p>
                <p>+8801571214994</p>
              </div>
            </div>
            <div className='flex gap-5 items-center mb-3'>
              <h1 className='text-green-500 text-xl bg-green-600 bg-opacity-10 p-2 p-4 rounded-lg'><FaEnvelope></FaEnvelope></h1>
              <h1 className=''>soheltech4@gmail.com</h1>
            </div>
            <div className='flex gap-5 items-center'>
              <h1 className='text-green-500 text-xl bg-green-600 bg-opacity-10 p-2 p-4 rounded-lg'><FaLocationArrow></FaLocationArrow></h1>
              <h1 className='text-left'>Gulshan, Dhaka, Bangladesh</h1>
            </div>

          </div>
          <div 
          data-aos="zoom-in-up"
          data-aos-offset="100"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="true"
          
          
          className='text-center'>
            <h1 className='text-2xl mt-10 text-green-500'>Hey, I am also available here......</h1>
            <h1>Drop a message and let's have some fun</h1>
            <div className='text-2xl mt-5 mb-5'>
              <button className='mr-5 border p-2 rounded-full hover:text-green-600 hover:border-green-600'><Link to="https://www.linkedin.com/in/soheltech" target='_blank'><FaLinkedinIn /></Link></button>
              <button className='mr-5 border p-2 rounded-full hover:text-green-600 hover:border-green-600'><Link to="https://wa.me/qr/I4W5JCCE36W6E1" target='_blank'><FaWhatsapp /></Link></button>
              <button className='mr-5 border p-2 rounded-full hover:text-green-600 hover:border-green-600'><Link to="https://t.me/bdsohel97" target='_blank'><FaTelegram /></Link></button>
              <button className='mr-5 border p-2 rounded-full hover:text-green-600 hover:border-green-600'><Link to="https://www.facebook.com/soheltech4" target='_blank'><FaFacebook /></Link></button>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-right"
          data-aos-offset="100"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="true"

          className="card flex-shrink-0 rounded-md w-full max-w-sm shadow-2xl">
          <form ref={form} onSubmit={sendEmail} className="card-body p-2 ">
            <div className="form-control">
              <label className="label">
                <span className="label-text ">Name</span>
              </label>
              <input type="text" name='user_name' required className="input focus:outline-none border border-t-0 border-x-0 border-opacity-50 outline-none" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text ">Email</span>
              </label>
              <input type="email" name='user_email' required className="input focus:outline-none border border-t-0 border-x-0 border-opacity-50 outline-none" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text ">Message</span>
              </label>
              <textarea type="text" name='message' required className="h-20 input focus:outline-none border border-t-0 border-x-0 border-opacity-50 outline-none" />
            </div>
            <div className="form-control mt-6">
              <input type='submit' className="btn rounded-lg uppercase text-white hover:bg-green-500 bg-green-600 " value="Send" />
            </div>
            </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;