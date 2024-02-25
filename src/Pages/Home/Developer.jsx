import lottie from 'lottie-web';
import animationData from '../../../../sohel-tech4/public/developer.json';
import { useEffect } from 'react';

const Developer = () => {
    useEffect(() => {
      const anim = lottie.loadAnimation({
        container: document.getElementById('your-lottie-container-id'),
        renderer: 'svg', 
        loop: true,
        autoplay: true,
        animationData: animationData, 
      });
  
      return () => {
        anim.destroy();
      };
    }, []);
  
    return (
      <div id="your-lottie-container-id" style={{ width: '100%', height: '100%' }}></div>
    );
  };
  
  export default Developer;