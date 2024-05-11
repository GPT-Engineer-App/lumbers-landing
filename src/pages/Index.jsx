import { Box, Button, Container, Flex, Heading, Image, Link, Stack, Text, VStack } from "@chakra-ui/react";
import { FaTree } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex direction="column" align="center" justify="center" minHeight="100vh" bg="white">
        <Box as="header" width="full" py={4} px={8} boxShadow="sm">
          <Flex justify="space-between" align="center">
            <FaTree size="32" color="#38A169" />
            <Stack direction="row" spacing={4}>
              <Link href="#services" fontWeight="bold">
                Services
              </Link>
              <Link href="#about" fontWeight="bold">
                About
              </Link>
              <Link href="#contact" fontWeight="bold">
                Contact
              </Link>
            </Stack>
          </Flex>
        </Box>
        <VStack spacing={8} px={8} mt={10} textAlign="center">
          <Heading fontSize="4xl" fontWeight="bold" color="gray.800">
            Premium Lumber Supplies
          </Heading>
          <Text fontSize="xl" color="gray.600">
            High-quality wood for all your construction needs.
          </Text>
          <Image src="https://images.unsplash.com/photo-1596628930480-540b65f6f0a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmb3Jlc3QlMjBsdW1iZXJ8ZW58MHx8fHwxNzE1NDQyNTE5fDA&ixlib=rb-4.0.3&q=80&w=1080" boxSize="400px" objectFit="cover" borderRadius="lg" alt="Lumber in forest" />
          <Button colorScheme="green" size="lg" px={10}>
            Explore Products
          </Button>
        </VStack>
        <Box as="footer" width="full" py={4} px={8} mt="auto" bg="gray.100">
          <Flex justify="space-between" align="center">
            <Text fontSize="sm" color="gray.600">
              &copy; {new Date().getFullYear()} Lumber Co.
            </Text>
            <Stack direction="row" spacing={4}>
              <Link href="#privacy" fontSize="sm" color="gray.600">
                Privacy
              </Link>
              <Link href="#terms" fontSize="sm" color="gray.600">
                Terms
              </Link>
            </Stack>
          </Flex>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;
