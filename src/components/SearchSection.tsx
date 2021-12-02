import React from "react";
import {
  Box,
  Flex,
  Select,
  Button,
  Stack,
  Input,
} from "@chakra-ui/react";
import {
  FaSistrix, FaUser, FaTwitter, FaFacebookF,
} from "react-icons/fa";
import { BsFillCaretDownFill, BsSearch } from "react-icons/bs";
import { RiRestartLine } from "react-icons/ri";

export default function SearchSection() {
  return (
    <Box h="183px" bg="#F4F4F4" mb="200px">

      <Box mx={[156]} h="full">
        <Flex alignItems="center" h="full" justifyContent="space-around">
          <Stack spacing={3} d="flex" alignItems="center">
            <Input placeholder="serach docters,clinics,hospitals,etc " h="49px" bg="white" w="514px" size="md" />
            <Select placeholder="Select specialty" bg="white" ml="5" h="49px" icon={<BsFillCaretDownFill />} />
          </Stack>
          <Stack spacing={3} d="flex" alignItems="center">
            <Select placeholder="Select specialty" bg="white" h="49px" w="514px" icon={<BsFillCaretDownFill />} />
            <Select placeholder="Select specialty" bg="white" ml="5" h="49px" w="514px" icon={<BsFillCaretDownFill />} />

          </Stack>
          <Stack spacing={3} d="flex" alignItems="center">
            <Button bg="#170041" w="196px" variant="solid" color="white">
              search
              <Box ml={[20]}>
                <BsSearch />
              </Box>
            </Button>
            <Button
              bg="#3DE0FF"
              w="196px"
              variant="solid"
              color="white"
            >
              Reset
              <Box ml={[20]}>
                <RiRestartLine />
              </Box>
            </Button>
          </Stack>

        </Flex>
      </Box>
    </Box>

  );
}
