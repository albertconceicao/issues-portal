import { Flex, Box } from '@chakra-ui/react';
import { Sidebar } from '../../components/Sidebar';
import { Item } from '../../components/Item';

export const CreateItem = () => {
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
                <Item />
            </Flex>

        </Box>
        
    );
}