import Button from '@components/lib/Button';
import './App.css';

const handleClick = () => {
  console.log('click');
};

function App() {
  return <Button onClick={handleClick}>Click me</Button>;
}

export default App;
