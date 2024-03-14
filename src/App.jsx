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
        <button>Github</button>
        <button>Frontend Mentor</button>
        <button>Linkedin</button>
        <button>Twitter</button>
        <button>Instagram</button>
      </div>
    </section>
  ) 
  
}

export default App;
