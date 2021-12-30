import React from 'react';
import { useSelector } from 'react-redux';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function UserBlogTable() {
  const userBlogMap = useSelector((state) => state.blog.userBlogMap);
  return (
    <div>
      <Table striped>
        <tr>
          <th>Name</th>
          <th>Blogs</th>
        </tr>
        <tbody>
          {Object.entries(userBlogMap).map((entry) => (
            <tr key={entry[0]}>
              <td>
                <Link to={`/users/${entry[0]}`}>{entry[1].user.name}</Link>
              </td>
              <td>{entry[1].blogs.length}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
