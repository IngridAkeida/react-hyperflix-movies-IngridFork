import firebase from 'firebase/app';
import 'firebase/auth';
import SignUp from '../components/pages-components/SignUp';


const firebaseConfig = {
};

firebase.initializeApp(firebaseConfig);

const Login = () => {
  return (
    <div>
      <h1>My App</h1>
      <SignUp />
    </div>
  );
};

export default Login;
