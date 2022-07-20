import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack, Textarea, FormLabel } from "@chakra-ui/react";
import { Input } from './Input/Input';
 
export const Item = () => {
    return (
        <Box flex="1" borderRadius={8} bg="gray.300" p="8">
                            <Heading size="lg" fontWeight="normal">Criar novo item</Heading>

                            <Divider my="6" borderColor="gray.700" />

                            <VStack spacing="8">
                                <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
                                    <Input name="issue"typ="text" label="Problema"/>
                                    <Input name="version" type="text" label="Versão"/>
                                </SimpleGrid>

                                <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
                                    <Input name="register-author" type="text" label="Autor do Registro"/>
                                    {/* <Input name="password_confirmation" type="password" label="Confirmação da senha"/> */}
                                </SimpleGrid>
                                <FormLabel htmlFor="description">Descrição do Problema</FormLabel>
                                <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
                                    <Textarea bg="white" name="description" label="Descrição do problema"></Textarea>
                                </SimpleGrid>
                                <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
                                    <Input name="priority" type="number" label="Prioridade" />
                                    <Input name="date" type="date" label="Data" />
                                    <Input name="status" type="text" label="Status" />
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