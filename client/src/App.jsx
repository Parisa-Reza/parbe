import { AppRouter } from './router'
import { Toaster } from 'react-hot-toast';

function App() {


  return (
    <>
      <div className='text-3xl'>Parbe</div>
      <AppRouter/>
      <Toaster
      toastOptions={{
        className: '',
        style: {
          fontSize: '16px',
        },
      }}
      />
    </>
  )
}

export default App
