import { UserProvider } from './context/userContext';
import { AppRouter } from './router'
import { Toaster } from 'react-hot-toast';

export const App=()=> {


  return (
    <UserProvider>
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
      </UserProvider>
  )
}


