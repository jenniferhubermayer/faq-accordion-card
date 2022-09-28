import "./App.css";

// COMPONENTS
import Accordion from "./Components/Accordion";
import HeaderImage from "./Components/HeaderImage";

function App() {
  return (
    <div className="App">
      <HeaderImage />
      <main>
        <h1>FAQ</h1>
        <Accordion
          headline="How many team members can I invite?"
          text="You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan."
        />
        <Accordion
          headline="What is the maximum file upload size?"
          text="No more than 2GB. All files in your account must fit your allotted storage space."
        />
        <Accordion
          headline="How do I reset my password?"
          text="Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you."
        />
        <Accordion
          headline="Do you provide additional support?"
          text="Chat and email support is available 24/7. Phone lines are open during normal business hours."
        />
      </main>
    </div>
  );
}

export default App;
