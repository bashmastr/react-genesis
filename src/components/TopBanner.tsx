import React from "react";
import {
  Flex,
  Spacer,
  Button,
  Stack,
  Input,
  Icon,
  HStack,
  Box,
} from "@chakra-ui/react";
import { IoLogoInstagram } from "react-icons/io5";

import {
  AiFillFacebook, AiOutlineTwitter, AiFillYoutube, AiFillLinkedin,
} from "react-icons/ai";
import { BsSearch } from "react-icons/bs";

import {
  FaInstagram, FaLinkedin, FaTwitter, FaFacebookF,
} from "react-icons/fa";

export default function Banner() {
  return (
    <>
      <header>

        <Box>
          <Flex alignItems="center" h="50px" mx="56px" direction="row">
            <Box ml="94px">Lorem ipsum dolor sit amet, consectetur adipiscing elit</Box>
            <Spacer />
            <Box>
              <Stack spacing={3} direction="row" align="center" mr="0">
                {/* Icons */}
                <Stack direction="row" align="center" spacing={2}>

                  <Icon as={AiFillFacebook} w={6} h={6} mr="2" color="#4676ED" />

                  <Icon as={IoLogoInstagram} w={6} h={6} mr="2" color="#FF78B2" />

                  <Icon as={AiOutlineTwitter} w={6} h={6} mr="2" color="#55ACEE" />

                  <Icon as={AiFillYoutube} w={6} h={6} mr="2" color="#FF0000" />

                  <Icon as={AiFillLinkedin} w={6} h={6} mr="2" color="#007BB5" />

                </Stack>
                <Stack spacing={1} direction="row" align="center">
                  <Button colorScheme="teal" variant="outline" size="xs" px="26" color="#170041">
                    Dokto News
                  </Button>
                  <Button colorScheme="teal" variant="outline" size="xs" px="26" color="#170041">
                    Contact Us
                  </Button>
                  <HStack spacing={0} direction="row" align="center" pl="1" bg="#170041">
                    <Input
                      placeholder="serach Docters"
                      size="xs"
                      border="none"

                    />

                    <Icon as={BsSearch} w={6} pr="2" h={3} color="White" />

                  </HStack>
                </Stack>
              </Stack>

            </Box>
            <Button colorScheme="teal" variant="outline" size="xs" mx="4px">
              Dokto News
            </Button>
          </Flex>
        </Box>
      </header>
    </>
  );
}
