import { NavLink } from 'react-router-dom';

const ActiveLink = ({to, children}) => {
  return (
    <NavLink 
      to={to}
      className={({isActive}) => isActive ? 'font-semibold text-blue-500 underline ml-10' : 'ml-10'}
      >
      {children}
    </NavLink>
  );
};

export default ActiveLink;