import { Flex, Text, Icon, HStack, Box, Avatar, Input } from '@chakra-ui/react';
import { RiSearchLine, RiUserAddLine, RiTableLine } from 'react-icons/ri';


export const Header = ({name}) => {
    return(
        <Flex
          as="header"
          w="100%"
          h="32"
          mx="auto"
          px="6"
          align="center"
          bg="gray.400"
        >
            <Text
              fontSize="3xl"
              fontWeight="bold"
              letterSpacing="tight"
              w="64"
              as="a" 
              href="/chamados"
            >
                algecrud
                
            </Text>

            <Flex
                as="label"
                flex="1"
                py="4"
                px="8"
                ml="6"
                maxWidth={400}
                alignSelf="center"
                color="gray.200"
                position="relative"
                bg="gray.500"
                borderRadius="full"
            >
                <Input
                  color="gray.50"
                  variant="unstyled"
                  px="4"
                  mr="4"
                  placeholder="Buscar na plataforma"
                  _placeholder={{color:
                  "gray.400"}} 
                  
                />

                <Icon as={RiSearchLine} fontSize="20"/>

               
            </Flex>

            <Flex
                align="center"
                ml="auto"
            >
                <HStack 
                spacing="8"
                mx="8"
                pr="8"
                py="1"
                borderRightWidth={1}
                borderColor="gray.700"
                mb="2"
                >
                    {/* <Icon as={RiNotificationLine} fontSize="20" /> */}
                    <Flex  as='a' href="/chamados">
                        <Icon mr="2" mt="0.5" as={RiTableLine} fontSize="20" />  
                        <Text>Chamados</Text> 
                    </Flex>
                    <Flex as='a' href="/cadastro/usuario">
                        <Icon mr="2" mt="0.5" as={RiUserAddLine} fontSize="20"/>
                        <Text>Adicionar usuário</Text> 
                    </Flex>
                </HStack>

                <Flex align="center" mb="2">
                    <Box mr="4"  textAlign="right">
                        <Text as="a" href="/">Login</Text>
                    </Box>

                    <Avatar size="md" name="" src="/"/>
                </Flex>
            </Flex>
        </Flex>

    );
}