import * as React from 'react';
import { Provider } from 'react-redux';
import Login from './../../components/loginComponents/loginComponents';
import store from './../../redux/store/store';
export class LoginContainers extends React.Component<any, any>{
  render() {
    return (
      <div>
        <Provider store={store}>
          <Login />
        </Provider>
      </div>
    );
  }
}