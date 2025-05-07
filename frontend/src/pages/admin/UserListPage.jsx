import { Link } from 'react-router-dom';
import { Table, Button } from 'react-bootstrap';
import { FaEdit, FaTrash, FaTimes, FaCheck } from 'react-icons/fa';
import Message from '../../components/Message';
import Loader from '../../components/Loader';
import { useGetUsersQuery, useDeleteUserMutation } from '../../slices/usersApiSlice';
import { toast } from 'react-toastify';

const UserListPage = () => {
  const { data: users, isLoading, refetch, error } = useGetUsersQuery();
  const [deleteUser, { isLoading: deleteUserLoading }] = useDeleteUserMutation();

  const deleteUserHandler = async (userId) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      try {
        await deleteUser(userId);
        refetch();
        toast.success('User deleted');
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    }
  };

  return (
    <>
      <h1>Users</h1>
      {deleteUserLoading && <Loader />}
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <Table striped hover responsive size="sm" style={{ whiteSpace: 'nowrap' }}>
            <thead>
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>EMAIL</th>
                <th>ADMIN</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id}>
                  <td>{user._id}</td>
                  <td>{user.name}</td>
                  <td>
                    <a href={`mailto:${user.email}`}>{user.email}</a>
                  </td>
                  <td>{user.isAdmin ? <FaCheck style={{ color: 'green' }} /> : <FaTimes style={{ color: 'red' }} />}</td>
                  <td>
                    <Button as={Link} to={`/admin/users/${user._id}/edit`} variant="light" className="btn-sm mx-2">
                      <FaEdit />
                    </Button>
                    <Button onClick={() => deleteUserHandler(user._id)} variant="danger" className="btn-sm mx-2">
                      <FaTrash style={{ color: 'white' }} />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </>
      )}
    </>
  );
};

export default UserListPage;
