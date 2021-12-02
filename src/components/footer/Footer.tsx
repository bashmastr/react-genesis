import React from "react";
import {
  Stack, Box, Flex, Text, Image, chakra, useColorModeValue, Button, VStack, Link, Heading, Icon, HStack,
} from "@chakra-ui/react";
import { MdSettings, MdReceipt, MdLocationOn } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { VscMail } from "react-icons/vsc";
import {
  AiFillFacebook, AiOutlineTwitter, AiFillYoutube, AiFillLinkedin,
} from "react-icons/ai";
import { IoLogoInstagram } from "react-icons/io5";

export default function Footer() {
  return (
    <Box h="363px" w="full" bg="#170041" color="white">
      <Box px={[156]} w="full" h="full">

        <Flex w="full" h="full" justifyContent="space-between" alignItems="center">
          <Stack w="266px" h="280px">
            <Stack spacing={[16]} h="full">

              <Box>
                <chakra.svg
                  color={useColorModeValue("blue.500", "blue.300")}
                  aria-hidden
                  viewBox="0 0 123 24"
                  fill="none"
                  h="6"
                  flexShrink={0}
                >
                  <path
                    d="M23 0H7a1 1 0 00-1 1v16H3c-1.654 0-3 1.346-3 3v4h14v-3.583c0-.808.645-1.417 1.5-1.417.723 0 1.5.47 1.5 1.5 0 1.93 1.57 3.5 3.5 3.5s3.5-1.57 3.5-3.5V1a1 1 0 00-1-1zM12 20.417V22H2v-2a1 1 0 011-1h9.304c-.196.43-.304.909-.304 1.417zM20 13H10v-2h10v2zm0-6H10V5h10v2z"
                    fill="currentColor"
                  />
                  <path
                    d="M36.102 19h10.142v-2.855h-6.627v-2.99h6.108v-2.862h-6.108V7.31h6.627V4.455H36.102V19zM51.518 12.778c.007-1.242.732-1.981 1.833-1.981 1.1 0 1.754.724 1.747 1.932V19h3.473v-6.953c.007-2.457-1.492-4.098-3.786-4.098-1.612 0-2.833.817-3.316 2.145h-.121V8.09h-3.303V19h3.473v-6.222zM70.513 8.09h-3.658l-2.017 7.515h-.113l-2.01-7.514h-3.658L62.793 19h3.977l3.743-10.91zM76.192 19.206c2.863 0 4.745-1.385 5.142-3.53l-3.189-.092c-.27.724-.98 1.115-1.889 1.115-1.335 0-2.159-.888-2.159-2.223v-.092h7.273v-.867c0-3.594-2.188-5.568-5.284-5.568-3.296 0-5.412 2.258-5.412 5.64 0 3.493 2.088 5.617 5.518 5.617zm-2.095-6.84c.05-1.086.91-1.91 2.06-1.91 1.143 0 1.967.796 1.981 1.91h-4.04zM86.217 4.455h-3.473V19h3.473V4.455zM93.12 19.206c3.43 0 5.511-2.266 5.511-5.625 0-3.367-2.08-5.632-5.511-5.632-3.43 0-5.512 2.265-5.512 5.632 0 3.36 2.081 5.625 5.512 5.625zm.021-2.62c-1.285 0-1.996-1.222-1.996-3.026 0-1.811.71-3.04 1.996-3.04 1.243 0 1.953 1.229 1.953 3.04 0 1.804-.71 3.025-1.953 3.025zM100.01 23.091h3.473v-5.86h.071c.441 1.01 1.421 1.925 3.068 1.925 2.415 0 4.361-1.889 4.361-5.603 0-3.85-2.059-5.604-4.339-5.604-1.726 0-2.671 1.008-3.09 2.01h-.106V8.09h-3.438v15zm3.402-9.546c0-1.782.739-2.883 2.01-2.883 1.286 0 1.996 1.13 1.996 2.883 0 1.762-.71 2.905-1.996 2.905-1.271 0-2.01-1.136-2.01-2.904zM117.503 19.206c2.862 0 4.744-1.385 5.142-3.53l-3.189-.092c-.27.724-.98 1.115-1.89 1.115-1.335 0-2.159-.888-2.159-2.223v-.092h7.273v-.867c0-3.594-2.187-5.568-5.284-5.568-3.295 0-5.412 2.258-5.412 5.64 0 3.493 2.088 5.617 5.519 5.617zm-2.096-6.84c.05-1.086.909-1.91 2.06-1.91 1.144 0 1.967.796 1.982 1.91h-4.042z"
                    // fill={}
                  />
                </chakra.svg>
              </Box>
              <Text w="266px">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Text>

            </Stack>

          </Stack>

          {/* Middle section */}
          <Stack spacing={2}>
            <Stack>
              <Link href="https://chakra-ui.com">About Us</Link>
              <Link href="https://chakra-ui.com">FAQs</Link>
              <Link href="https://chakra-ui.com">T&Cs</Link>
              <Link href="https://chakra-ui.com">Privacy Policy</Link>
              <Link href="https://chakra-ui.com">HIPPA Policy</Link>
            </Stack>
          </Stack>

          {/* Contact section */}
          <Stack spacing={2}>

            <Heading size="sm" pb={6}>Contact with Dokto</Heading>
            <Stack>
              <Text>
                <Icon as={HiOutlineLocationMarker} w={4} h={4} mr="2" color="#3DE0FF" />
                2706 N Buffalo Grove Rd Arlington Heights, Illinois(IL), 60004 .
              </Text>
              <Text>
                <Icon as={BsTelephone} w={4} h={4} mr="2" color="#3DE0FF" />
                (847) 749-0143
              </Text>
              <Text>
                <Icon as={VscMail} w={4} h={4} mr="2" color="#3DE0FF" />

                support@dokto.com

              </Text>

              <HStack>
                <Icon as={AiFillFacebook} w={6} h={6} mr="2" color="#4676ED" />

                <Icon as={IoLogoInstagram} w={6} h={6} mr="2" color="#FF78B2" />

                <Icon as={AiOutlineTwitter} w={6} h={6} mr="2" color="#55ACEE" />

                <Icon as={AiFillYoutube} w={6} h={6} mr="2" color="#FF0000" />

                <Icon as={AiFillLinkedin} w={6} h={6} mr="2" color="#007BB5" />

              </HStack>

            </Stack>

          </Stack>

        </Flex>

      </Box>

    </Box>
  );
}
