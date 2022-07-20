import { Flex, Box } from '@chakra-ui/react';
import { Sidebar } from '../../components/Sidebar';



export const CreatePage = () => {
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
            </Flex>

        </Box>
        
    );
}