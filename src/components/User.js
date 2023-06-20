import PropTypes from 'prop-types';

const User = (user) => {
  console.log(user);
  let i = 0;
  for(let i in user){
      return (
      <li>
        <h1>{user[i].name}</h1>
      </li>
    );
  }
  i+=1;
};

User.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
  }).isRequired,
};

export default User;
