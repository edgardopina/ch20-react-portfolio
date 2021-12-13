//! import React and useEffect to re-render the component
import React, { useEffect } from 'react';

function Header(props) {
   const {
      //
      titles = [],
      setCurrentTitle,
      currentTitle,
      contactSelected,
      setContactSelected,
   } = props;

   useEffect(() => {
      document.title = currentTitle.name;
   }, [currentTitle]);

   return (
      <header className='flex-row px-1'>
         <h2>
            <a data-testid='link' href='/'>
               <span role='img' aria-label='camera'></span>
               Edgardo Pina
            </a>
         </h2>
         <nav>
            <ul className='flex-row'>
               {titles.map((title) => (
                  <li
                     className={`mx-1 ${currentTitle.name === title.name && !contactSelected && 'navActive'}`}
                     key={title.name}
                  >
                     <span
                        onClick={() => {
                           setCurrentTitle(title);
                           setContactSelected(false);
                        }}
                     >
                        {title.name}
                     </span>
                  </li>
               ))}
            </ul>
         </nav>
      </header>
   );
}

export default Header;
