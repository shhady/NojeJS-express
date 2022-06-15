export const getUsers = () => {
  throw Error({ status: 401, message: 'error' });
  return 'All users';
};

export const createUsers = (user) => {
  return user;
};

export const updateUser = (id, updatedUser) => {
  return { updatedUser, id };
};
