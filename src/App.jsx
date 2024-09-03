import { Authenticator, withAuthenticator } from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";
import awsExports from "./aws-exports";
import TodoList from "./components/TodoList";

Amplify.configure(awsExports);

function App() {
  return (
    <div className="app">
      <Authenticator>
        {({ signOut }) => (
          <div>
            <header className="header">
              <button onClick={signOut}>Sign Out</button>
            </header>
            <main>
              <TodoList />
            </main>
          </div>
        )}
      </Authenticator>
    </div>
  );
}

export default withAuthenticator(App);
