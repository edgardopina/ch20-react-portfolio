//! This App.js file is the center of the application.
//! Think of App.js as THE ROOT COMPONENT or THE WRAPPER COMPONENT that houses all of the other components.
//* To effect any change on the application, we need to either modify this file or add components inside it.
//* React components follow the PascalCase naming convention. Knowing this will help you quickly identify
//* whether a function is a component or just a regular function.

//* we need to import React in every component file
import React, { useState } from 'react'; //* import React and React's state handler
import Header from './components/Header';

//* because we are using webpack (in the background) and React, we can add HTML to Javascript without a string
function App() {
   //* initialize the Title state with useState without setter (for future use)
   const [titles] = useState([
      {
         name: 'About me',
         description: 'Let me show you what I can do for you.',
      },
      {
         name: 'Portfolio',
         description: 'Project examples',
      },
      {
         name: 'Contact',
         description: 'Contact',
      },
      {
         name: 'Resume',
         description: 'Resume',
      },
   ]);

   //! define React Hook for current title
   const [currentTitle, setCurrentTitle] = useState(titles[0]);

   //! React hook to manage the condition to render based on menu item selection
   const [contactSelected, setContactSelected] = useState(false);

   return (
      <div>
         <Header
            titles={titles}
            setCurrentTitle={setCurrentTitle}
            currentTitle={currentTitle}
            contactSelected={contactSelected}
            setContactSelected={setContactSelected}
         ></Header>
         <main>
            <div>
               <p>React Portfolio content</p>
            </div>
         </main>
         <footer>
            <p>React Portfolio content</p>
         </footer>
      </div>
   );
}

export default App;
