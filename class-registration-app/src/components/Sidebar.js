import React from 'react';

import { Box, Link, VStack, Text, Flex, Button } from '@chakra-ui/react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaHome, FaCalculator, FaDoorOpen, FaUser, FaCogs } from 'react-icons/fa';
import './Sidebar.css';
import { useUserContext } from './UserContext';

const Sidebar = () => {
  const navigate = useNavigate();
  const { updateUserRole } = useUserContext(); // Use the context
  const { userRole } = useUserContext();
  const isAdmin = userRole === 'admin';
  const isCustomer = userRole ==='customer';
  const isLoggedIn = userRole && userRole.length > 0;
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('userRole');
    updateUserRole(null);
    navigate('/login');
  };
  if (!isLoggedIn) {

   
    return (
      <Box className="sidebar" w="250px" bg="teal.500" h="100vh" color="white" p={4}>
        <Flex mb={4} justifyContent="center">
          <Text fontSize="xl" fontWeight="bold">
          Class Registration
          </Text>
        </Flex>
        
      </Box>
    );
  }

else{
  return (
    <Box className="sidebar" w="275px" bg="teal.500" h="100vh" color="white" p={4}>
      <Flex mb={4} justifyContent="center">
        <Text fontSize="xl" fontWeight="bold">Class Registration</Text>
      </Flex>

      <VStack spacing={3} align="stretch">
      {isCustomer && (
        <>
        <NavLink to="/home" activeClassName="active" className="nav-link">
          <Link as={Flex} align="center" fontSize="md" justifyContent="center">
            <FaHome size="1.2em" style={{ marginRight: '8px' }} /> Home
          </Link>
        </NavLink>
        
          
        <NavLink to="/classes" activeClassName="active" className="nav-link">
          <Link as={Flex} align="center" fontSize="md" justifyContent="center">
            <FaDoorOpen size="1.2em" style={{ marginRight: '8px' }} /> Classes
          </Link>
        </NavLink>

        <NavLink to="/coaches" activeClassName="active" className="nav-link">
          <Link as={Flex} align="center" fontSize="md" justifyContent="center">
            <FaUser size="1.2em" style={{ marginRight: '8px' }} /> Coaches
          </Link>
        </NavLink>

        <NavLink to="/calorie-calculator" activeClassName="active" className="nav-link">
          <Link as={Flex} align="center" fontSize="md" justifyContent="center">
            <FaCalculator size="1.2em" style={{ marginRight: '8px' }} /> Class Recommendation
          </Link>
        </NavLink>
        
        </>
        )}

        {isAdmin && (
          <>
          <NavLink to="/admin-home" activeClassName="active" className="nav-link">
          <Link as={Flex} align="center" fontSize="md" justifyContent="center">
            <FaHome size="1.2em" style={{ marginRight: '8px' }} /> Home
          </Link>
        </NavLink>
            <NavLink to="/admin-classes" activeClassName="active" className="nav-link">
              <Link as={Flex} align="center" fontSize="md" justifyContent="center">
                <FaCogs size="1.2em" style={{ marginRight: '8px' }} /> Manage Classes
              </Link>
            </NavLink>

            <NavLink to="/admin-coaches" activeClassName="active" className="nav-link">
              <Link as={Flex} align="center" fontSize="md" justifyContent="center">
                <FaCogs size="1.2em" style={{ marginRight: '8px' }} /> Manage Coaches
              </Link>
            </NavLink>

            <NavLink to="/admin-users" activeClassName="active" className="nav-link">
              <Link as={Flex} align="center" fontSize="md" justifyContent="center">
                <FaCogs size="1.2em" style={{ marginRight: '8px' }} /> Manage Users
              </Link>
            </NavLink>

            <NavLink to="/admin-registrations" activeClassName="active" className="nav-link">
              <Link as={Flex} align="center" fontSize="md" justifyContent="center">
                <FaCogs size="1.2em" style={{ marginRight: '8px' }} /> Registrations
              </Link>
            </NavLink>
          </>
          
        )}

        {/* Additional Links can be added here */}
        if (isLoggedIn) {
        <Button colorScheme="blue" onClick={handleLogout} mt="auto">
            Logout
          </Button>
}
      </VStack>
    </Box>
  );
};

}
  
export default Sidebar;
