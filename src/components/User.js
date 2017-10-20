import React from 'react';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import List, { ListItem, ListItemText } from 'material-ui/List';
import PropTypes from 'prop-types';

const User = ({ info: { userName, email, avatar } }) => {
  return (
    <Paper style={{ width: '100%' }}>
      <List>
        <ListItem dense>
          <Avatar src={avatar} style={{ height: 60, width: 60 }} />
          <ListItemText primary={userName} secondary={email} />
        </ListItem>
      </List>
    </Paper>
  );
};

User.propTypes = {
  info: PropTypes.shape({
    userName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired
  })
};

export default User;
