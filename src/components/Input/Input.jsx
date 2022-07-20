import { FormControl, FormLabel, Input as ChakraInput } from "@chakra-ui/react";

export const Input = ({name, label, type}) => {
    return (
        <FormControl>
            {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
            <ChakraInput
            id={name}
            name={name}
            type={type}
            focusBorderColor="white.300"
            bgColor="white"
            variant="outline"
            _hover={{
                bgColor: "white.300"
            }}
            _placeholder={{
                bgColor: "white.400"
            }}
            size="lg" />
        </FormControl>
    );
}