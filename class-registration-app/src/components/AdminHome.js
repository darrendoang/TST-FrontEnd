import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Heading, Text, Button, Flex, Image } from '@chakra-ui/react';


const AdminHome = () => {
  const navigate = useNavigate();

  const navigateToAdminClasses = () => {
    navigate('/admin-classes');
  };

  const navigateToAdminUsers = () => {
    navigate('/admin-users');
  };

  const navigateToAdminCoaches = () => {
    navigate('/admin-coaches');
  };

  const navigateToAdminRegistrations = () => {
    navigate('/admin-registrations');
  };

  return (
    <Box maxW="lg" mx="auto" mt={8} p={4} borderWidth="1px" borderRadius="md">
      <Flex flexDirection="column" alignItems="center" justifyContent="center">
        <Heading as="h1" size="xl" align="center" mb={4}>
          Admin Dashboard
        </Heading>
        <Text fontSize="lg" textAlign="center" mb={6}>
          Manage classes, users, and coaches efficiently!
        </Text>

        <Button colorScheme="teal" onClick={navigateToAdminClasses} mb={2}>
          Manage Classes
        </Button>
        <Button colorScheme="teal" onClick={navigateToAdminUsers} mb={2}>
          Manage Users
        </Button>
        <Button colorScheme="teal" onClick={navigateToAdminCoaches} mb={2}>
          Manage Coaches
        </Button>
        <Button colorScheme="teal" onClick={navigateToAdminRegistrations} mb={2}>
          See Registrations
        </Button>
      </Flex>
    </Box>
  );
};

export default AdminHome;
