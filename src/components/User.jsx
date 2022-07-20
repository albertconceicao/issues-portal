import { Flex, Button, Heading, Box, SimpleGrid, HStack, Divider, VStack } from '@chakra-ui/react';
import { Input } from './Input/Input'

export const User = () => {
    return (
        
                <Box flex="1" borderRadius={8} bg="gray.300" p="8">
                            <Heading size="lg" fontWeight="normal">Criar usuário</Heading>

                            <Divider my="6" borderColor="gray.700" />

                            <VStack spacing="8">
                                <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
                                    <Input name="name" label="Nome completo"/>
                                    <Input name="email" type="email" label="E-mail"/>
                                </SimpleGrid>

                                <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
                                    <Input name="passoword" type="password" label="Senha"/>
                                    <Input name="password_confirmation" type="password" label="Confirmação da senha"/>
                                </SimpleGrid>
                            </VStack>

                            <Flex mt="8" justify="flex-end">
                                <HStack spacing="4">
                                    <Button colorScheme="blackAlpha">Cancelar</Button>
                                    <Button colorScheme="green">Salvar</Button>
                                </HStack>
                            </Flex>
                </Box>
           
        
    );
}