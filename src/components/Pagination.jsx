import { Box, Button, Stack } from '@chakra-ui/react';

export const Pagination = () => {
    return(
        <Stack 
        direction="row" 
        mt="8" 
        justify="space-between" 
        align="center" 
        spacing="6">
            <Box>
                <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
            </Box>
            <Stack direction="row" spacing="2">
            <Button 
            size="sm" 
            fontSize="xs" 
            width="4"
            colorScheme="green" 
            disabled 
            _disabled={{
                bgColor: "green.500",
                cursor: "default",
            }}>
                1
            </Button>
            <Button 
            size="sm" 
            fontSize="xs" 
            width="4"
            bgColor="gray.400"
            _hover={{
                bg: "gray.500"
            }}
            >
                2
            </Button>
            <Button 
            size="sm" 
            fontSize="xs" 
            width="4"
            bgColor="gray.400"
            _hover={{
                bg: "gray.500"
            }}
            >
                3
            </Button>
            <Button 
            size="sm" 
            fontSize="xs" 
            width="4"
            bgColor="gray.400"
            _hover={{
                bg: "gray.500"
            }}
            >
                4
            </Button>
            </Stack>
        </Stack>
    );
}