import Button from '@components/lib/Button';
import './styles/global/fonts.scss';
import './styles/global/app.scss';

const handleClick = () => {
  console.log('click');
};

function App() {
  return (
    <div>
      <Button onClick={handleClick} variant='primary'>
        Primary
      </Button>
      <Button onClick={handleClick} variant='secondary'>
        Secondary
      </Button>
      <Button onClick={handleClick} disabled>
        Disabled
      </Button>
    </div>
  );
}

export default App;
