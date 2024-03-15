import './App.css'

import avatar from './assets/images/avatar-jessica.jpeg'

function App() {
  return (
    <section id="container">
      <img src={avatar} alt='avatar' />

      <div id='details'>
        <h1>Jessica Randall</h1>
        <p>London, United Kingdom</p>
      </div>
      
      <p id='career'>"Front-end developer and avid teacher."</p>

      <div id='buttons'>
        <a href='https://www.github.com'>
          <button>Github</button>
        </a>
        <a href='https://www.frontendmentor.io'>
          <button>Frontend Mentor</button>
        </a>
        <a href='http://www.linkedin.com'>
          <button>Linkedin</button>
        </a>
        <a href='http://www.twitter.com'>
          <button>Twitter</button>
        </a>
        <a href='https://www.instagram.com'>
          <button>Instagram</button>
        </a>
      </div>
    </section>
  ) 
  
}

export default App;
