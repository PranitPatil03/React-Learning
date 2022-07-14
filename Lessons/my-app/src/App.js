import './App.css';

function App() {
  
  let name="Pranit";
  
  return (
    <>
      <nav>
        <ul>
          <li>Home</li>
          <li>Products</li>
          <li>Location</li>
          <li>contact</li>
        </ul>
      </nav>
      <div>
        <h2>React JSX</h2>
          <h3>Hello myself {name}</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere alias velit quis temporibus sunt dolor in earum cumque! Esse voluptates tenetur quia consequuntur quidem animi veniam harum omnis doloremque sit?
          </p>
      </div>
    </>
  );
}

export default App;
