import { useDispatch } from 'react-redux';
import classes from './Auth.module.css';
import { authActions } from '../store/auth-slice';

const Auth = () => {

 const dispatch = useDispatch(); 
  return (
    <main className={classes.auth}>
      <section>
        <form>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' /> 
          </div>
          <button onClick={()=>{
            dispatch(authActions.login());
          }}>
          Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
