import React, { useEffect, useState } from "react";
import { Typography, List, ListItem, ListItemText } from "@material-ui/core";
import "./UserList.css"; // Import the CSS file
import ViewDetails from "./ViewDetails";
import { Button } from "@material-ui/core";
//import AddUser from "./AddUser";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetch(`http://localhost:5000/api/v1/get/user?page=${currentPage}&limit=3`)
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.data);
        setCurrentPage(data.currentPage);
        setTotalPages(data.totalPages);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [currentPage]);

  const handleToggleDetails = (user) => {
    setSelectedUser(selectedUser === user ? null : user);
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <div className="user-list-container">
      <Typography variant="h4" className="user-list-heading">
        Users
      </Typography>
      <List>
        {users.map((user) => (
          <div key={user.id}>
            <ListItem className="user-item">
              <ListItemText
                primary={
                  <span
                    className="user-name"
                    onClick={() => handleToggleDetails(user)}
                  >
                    <p>User ID: {user.id}</p>
                    Name: {user.name}
                  </span>
                }
                secondary={
                  <span className="user-email">Email: {user.email}</span>
                }
              />
              <div className="button-container">
                <Button onClick={() => handleToggleDetails(user)}>
                  {selectedUser === user ? "Hide Details" : "View Details"}
                </Button>
              </div>
            </ListItem>
            {selectedUser === user && (
              <div>
                <ViewDetails user={user} />
              </div>
            )}
          </div>
        ))}
      </List>
      <div className="pagination-controls">
        <Button onClick={handlePrevPage} disabled={currentPage === 1}>
          Previous Page
        </Button>
        <span>{`Page ${currentPage} of ${totalPages}`}</span>
        <Button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next Page
        </Button>
      </div>
    </div>
  );
};

export default UserList;
