import React from "react"; import {
  Box,
  Flex,
  Spacer,
  Button,
  Stack,
  Input,
} from "@chakra-ui/react";
import {
  FaSistrix, FaUser, FaTwitter, FaFacebookF,
} from "react-icons/fa";

export default function Banner() {
  return (
    <>
      <Stack direction="row" spacing={0} w="full" h="130px">
        <Box h="full" w="1000px" bg="#170041" align="center" color="white" d="flex" justifyContent="center" alignItems="center">Loggo</Box>
        <Box h="full" w="1500px" bg="#3DE0FF" align="center" borderColor="black" borderLeft="0" borderRight="solid 1px" bord>
          <Flex justifyContent="space-around" h="full" alignItems="center">
            <Button bg="#3DE0" variant="link" color="#170041">
              Home
            </Button>
            <Button bg="#3DE0" variant="link" color="#170041">
              How it works
            </Button>
            <Button bg="#3DE0" variant="link" color="#170041">
              Available care
            </Button>
            <Button bg="#3DE0" variant="link" color="#170041">
              About us
            </Button>
          </Flex>

        </Box>
        <Box h="full" w="full" align="center" pr="140px" bg="#3DE0FF ">
          <Flex justifyContent="space-around" h="full" alignItems="center">
            <Button bg="#3DE0" variant="link" color="#170041">
              Patient Registration
            </Button>
            <Button bg="#3DE0" variant="link" color="#170041">
              Provider Registration
            </Button>
            <Button bg="#170041" variant="" color="white" size="md" pr="10px" borderRadius="40px">
              Login
              <Box ml={[8]} mr={[1]}>
                <FaUser />
              </Box>
            </Button>

          </Flex>

        </Box>

      </Stack>
    </>
  );
}
