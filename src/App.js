//! This App.js file is the center of the application.
//! Think of App.js as THE ROOT COMPONENT or THE WRAPPER COMPONENT that houses all of the other components.
//* To effect any change on the application, we need to either modify this file or add components inside it.
//* React components follow the PascalCase naming convention. Knowing this will help you quickly identify
//* whether a function is a component or just a regular function.

//* we need to import React in every component file
import React, { useState } from 'react'; //* import React and React's state handler



//* because we are using webpack (in the background) and React, we can add HTML to Javascript without a string
function App() {

   return (
      <div>
         <header>
            <p>React Portfolio header</p>
         </header>
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
