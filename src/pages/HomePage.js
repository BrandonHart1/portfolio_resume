import React from 'react';
import backgroundVideo from '../assets/programming.mp4';

const HomePage = () => {
  return (
    <div className='main'>
      <video src={backgroundVideo} autoPlay loop muted />
      <div className='content'>
        <h1>Hello!</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit saepe
          rerum nemo voluptatibus earum iste dolores eligendi asperiores ut vel,
          exercitationem mollitia dolorum magni cumque minima. Magni
          voluptatibus ea culpa sequi, modi debitis dicta minus, nostrum tenetur
          praesentium nesciunt suscipit vero ad accusamus. Ad quam id temporibus
          iure culpa ipsa dolore consequuntur ipsam quisquam voluptatibus sed
          voluptas eos magni iste corrupti, provident numquam quia veritatis
          sint maxime architecto fugit minus inventore! Placeat, est asperiores
          libero, quia harum maiores sunt distinctio consequuntur eveniet
          adipisci hic ut fuga? Repellendus perspiciatis praesentium sapiente
          esse culpa iusto doloribus blanditiis, soluta hic placeat deserunt
          libero.
        </p>
        <br />
        <h4>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque aut
          tempora necessitatibus vero! Facere numquam cupiditate quae
          repudiandae quos ea dolor officia odio. Accusantium, soluta est labore
          sunt assumenda id quae accusamus hic, corporis quo non aspernatur quos
          repellendus error. Repellat voluptate iusto doloremque aliquid,
          cupiditate officia ullam assumenda harum!
        </h4>
      </div>
    </div>
  );
};

export default HomePage;
