import { Box, Flex, Link, Text, VStack } from "@chakra-ui/react";
import SuggestedHeader from "./SuggestedHeader";
import SuggestedUser from "./SuggestedUser";

const SuggestedUsers = () => {
  return (
    <VStack py={8} px={6} gap={4}>
      <SuggestedHeader />
      <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
        <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
          Suggested for you
        </Text>
        <Text
          fontSize={12}
          fontWeight={"bold"}
          _hover={{ color: "gray.400" }}
          cursor={"pointer"}
        >
          See All
        </Text>
      </Flex>
      <SuggestedUser username='Dan Abramov' followers={1392} avatar='https://bit.ly/dan-abramov'/>
      <SuggestedUser username='Ryan Florence' followers={587} avatar='https://bit.ly/ryan-florence'/>
      <SuggestedUser username='Christian Nwamba' followers={759} avatar='https://bit.ly/code-beast'/>
      
      
      <Box fontSize={12} color={"gray.500"} mt={5} alignSelf={'start'}>
        &copy; {new Date().getFullYear()} By{" "}
        <Link
          href="https://www.github.com/felixateya"
          target="__blank"
          color={"blue.500"}
          fontSize={14}
        >
          Felix Mulaa
        </Link>
      </Box>
    </VStack>
  );
};

export default SuggestedUsers;
