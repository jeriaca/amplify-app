import React from 'react'
import { 
  withAuthenticator, 
  AmplifySignOut 
} from '@aws-amplify/ui-react/legacy';

const App = () => {
  return (
    <div>
      <h1>Hello from AWS Amplify</h1>
      <p>...and Jeri says hey.</p>

      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);