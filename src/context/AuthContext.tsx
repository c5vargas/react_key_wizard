import { createContext, useContext, ReactNode, useReducer } from 'react';
import { Auth, Password } from '../types';

type StateType = {auth: Auth|null, passwords: Password[]|null}
type ActionsType = {type: 'setAuth', payload: Auth|null}|{type: 'setPasswords', payload: Password[]|null}
type DispatchType = (action: ActionsType) => void
type AuthProviderProps = {children: ReactNode}

const AuthContext = createContext<{state: StateType; dispatch: DispatchType}|undefined>(undefined)

function authReducer(state: StateType, action: ActionsType) {
  if(action.type === 'setAuth') {
    return {
      ...state,
      auth: action.payload
    }
  }

  if(action.type === 'setPasswords') {
    return {
      ...state,
      passwords: action.payload
    }
  }

  return state
}

function AuthProvider({ children }: AuthProviderProps) {
  const [state, dispatch] = useReducer(authReducer, {auth: null, passwords: null})
  const value = {state, dispatch}

  return ( 
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth debe ser utilizado dentro de un AuthProvider');
  }
  return context;
};

export {AuthProvider, useAuth};