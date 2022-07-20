import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Flex,
    Heading, 
    Button,
    Icon,
    Box,
    Select,
    Checkbox
  } from '@chakra-ui/react'
import { Pagination } from '../../components/Pagination';
import { RiAddLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

export const TableIssues = () => {
    return (
        <>
            <Flex
            w="100%"
            my="6"
            maxWidth={1300}
            mx="auto"
            px="6"
            // px="6"
            borderRadius={8}
            bg="gray.100"
            p="6"
            >
                <Box flex="1" borderRadius={8}>
                    <Flex
                        mb="8" justify="space-between" align="center">
                            <Heading size="lg" fontWeight="normal">
                                Chamados
                            </Heading>

                            <Flex justify="space-between" align="center">
                                <Select placeholder='Ordenar por' mr="2">
                                    <option value='option1'>Problema</option>
                                    <option value='option2'>ID</option>
                                    <option value='option3'>Versão</option>
                                    <option value='option3'>Autor do Registro</option>
                                    <option value='option3'>Descrição do Problema</option>
                                    <option value='option3'>Prioridade</option>
                                    <option value='option3'>Data do registro</option>
                                    <option value='option3'>Status</option>
                                </Select>
                                <Button as={Link} size="md" fontSize="sm" p="5" colorScheme="green"
                                leftIcon={<Icon as={RiAddLine} fontSize="20"/>} to="/cadastro/item"
                                >Criar novo</Button>
                            </Flex>
                        </Flex>
                    <TableContainer>
                        <Table variant='striped' colorScheme='facebook'>
                            <Thead fontSize="12">
                                <Tr>
                                    <Th>Problema <Checkbox colorScheme="green" /></Th>
                                    <Th isNumeric>ID <Checkbox colorScheme="green" /></Th>
                                    <Th>Versão <Checkbox colorScheme="green" /></Th>
                                    <Th>Autor do Registro <Checkbox colorScheme="green" /></Th>
                                    <Th>Descrição do Problema <Checkbox colorScheme="green" /></Th>
                                    <Th>Prioridade <Checkbox colorScheme="green" /></Th>
                                    <Th>Data do registro <Checkbox colorScheme="green" /></Th>
                                    <Th>Status <Checkbox colorScheme="green" /></Th>
                                </Tr>
                            </Thead>
                            <Tbody fontSize="12.5">
                                <Tr>
                                    <Td>Ava sem acesso</Td>
                                    <Td isNumeric>123</Td>
                                    <Td>1.1.2</Td>
                                    <Td>Albert</Td>
                                    <Td>Minha conta consta como não cadastrada</Td>
                                    <Td>1</Td>
                                    <Td>03/06/2022</Td>
                                    <Td>Resolvido</Td>
                                </Tr>
                                <Tr>
                                    <Td>Ava sem acesso</Td>
                                    <Td isNumeric>123</Td>
                                    <Td>1.1.2</Td>
                                    <Td>Albert</Td>
                                    <Td>Minha conta consta como não cadastrada</Td>
                                    <Td>1</Td>
                                    <Td>03/06/2022</Td>
                                    <Td>Resolvido</Td>
                                </Tr>
                                <Tr>
                                    <Td>Ava sem acesso</Td>
                                    <Td isNumeric>123</Td>
                                    <Td>1.1.2</Td>
                                    <Td>Albert</Td>
                                    <Td>Minha conta consta como não cadastrada</Td>
                                    <Td>1</Td>
                                    <Td>03/06/2022</Td>
                                    <Td>Resolvido</Td>
                                </Tr>
                            </Tbody>
                        </Table>
                        <Pagination />
                    </TableContainer>
                </Box>
            </Flex>
        </>
        );
}