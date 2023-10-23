import React,{useState} from 'react'
import './_lutricsBox.scss'
import Vectary from '../assets/Vectary texture.png'
import ReactPlayer from 'react-player'
import emailjs from 'emailjs-com';

const LutricsBox = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_0zi0coz', 
        'template_yxhtltq',
        e.target,
        'ZVipB1gIHHzqJ1TSx' 
      )
      .then(
        (result) => {
          console.log('Email sent successfully:', result.text);
        },
        (error) => {
          console.error('Error sending email:', error.text);
        }
      );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <>
    <section className='hero'>
        <div className='container'>
          <img className='image'  src={Vectary} alt="" />
          <div className='description'>
            <h1>Lutrics box</h1>
          <p>Experience the future of smart 
            lighting control with the Lutrics Box, your gateway to effortless 
            illumination. With our innovative Internet of Things (IoT) device, you 
            can transform your home's lighting system into a seamless and energy-efficient marvel.

</p>

          <button className='btn-row'>
            <a href="/">
            Download App</a>
          </button>
          </div>
          
        </div>
       
    </section>
    <section className='videoSection'>
      <h2>Meet our CTO</h2>
      <div className='video'>
        <ReactPlayer
        width='1100px'
        height='550px'
        url='https://youtu.be/OrAWtAWAvcQ?si=fO8H3DGefiR6vFVb'/>
      </div>
      <p>
            Our cutting-edge mobile app
       effortlessly sends signals to your
        Lutrics Box, allowing you to switch 
        lights on or off, set timers, and customize
         lighting modes to suit your needs. Whether you're enhancing the ambiance for a cozy evening, or ensuring the lights are off when you're away, Lutrics Box adapts to your lifestyle.
      </p>
    </section>
    <section className='hero'>
        {/* <div className='container'>
          <img className='image' width={600} height={700}  src={LutricsImage} alt="" />
          <div className='description'>
            <h1>Lutrics box</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda dignissimos dolor cumque libero voluptatum hic neque eum corrupti quis nostrum nihil distinctio, consectetur perspiciatis error delectus pariatur aliquid ducimus. Sunt!</p>

          <button className='btn-row'>
            <a href="/">
            Download App</a>
          </button>
          </div>
          
        </div> */}
       
        <div className='form-container'>
            <h2>To order Lutrics Box sends us email</h2>
        <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          ></textarea>
        <button type="submit">Send Email</button>
      </form>
          </div>
    </section>
    </>
   
  )
}

export default LutricsBox