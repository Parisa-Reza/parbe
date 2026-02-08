import { AppRouter } from './router'
import { Toaster } from 'react-hot-toast';

export const App=()=> {


  return (
    <>
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


