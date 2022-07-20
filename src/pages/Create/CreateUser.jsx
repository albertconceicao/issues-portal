import { Flex, Box } from '@chakra-ui/react';
import { Sidebar } from '../../components/Sidebar';
import { User } from '../../components/User';

export const CreateUser = () => {
    return (
        <Box>
            <Flex
                w="100%"
                my="6"
                maxWidth={1480}
                mx="auto"
                px="6"
                >
                <Sidebar />
                <User />
            </Flex>

        </Box>
        
    );
}