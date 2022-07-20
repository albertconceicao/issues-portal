import { Flex, Button, Stack, Link as ChakraLink} from '@chakra-ui/react';
import { Input } from '../../components/Input/Input'
import { Link } from 'react-router-dom';
export const Login = () => {
    return (
        <Flex
            w="100vw"
            h="70vh"
            align="center"
            justifyContent="center">
            <Flex
            as="form"
            width="100%"
            maxWidth={360}
            bg="gray.400"
            color="black"
            p="8"
            borderRadius={8}
            flexDir="column"
            >
                <Stack spacing="4">
                    <Input name="user" type="text" label="Usuário" />
                    <Input name="password" type="password" label="Senha" />
                </Stack>

                <Button as={Link} type="submit" mt="6" colorScheme="green" size="lg" to="/chamados">Entrar</Button>

                <ChakraLink as={Link} to="/cadastro/usuario">
                    <small>Cadastrar usuário</small>
                </ChakraLink>
            </Flex>
        </Flex>
    );
}