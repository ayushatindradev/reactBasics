export const UserStatus = ({ isLoggedIn }) => {
    return <h2>{isLoggedIn ? "Welcome back!" : "Please log in."}</h2>;
  };
