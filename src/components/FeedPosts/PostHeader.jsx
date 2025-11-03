/* eslint-disable react/prop-types */
import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import { GoDotFill } from "react-icons/go";

const PostHeader = ({username, avatar}) => {
  return (
    <Flex
      justifyContent={"space-between"}
      alignItems={"center"}
      w={"full"}
      my={2}
    >
      <Flex alignItems={"center"} gap={2}>
        <Avatar src={avatar} alt="user profile pic" size={"sm"} />
        <Flex fontSize={12} alignItems={'center'} fontWeight={"bold"} gap={2}>
          {username}
          <Flex color={"gray.500"} alignItems={"center"}>
            <GoDotFill /> 1w
          </Flex>
        </Flex>
      </Flex>
      <Box cursor={"pointer"}>
        <Text
          fontSize={12}
          color={"blue.500"}
          fontWeight={"bold"}
          _hover={{ color: "white" }}
          transition={'0.2s ease-in-out'}
        >
          Unfollow
        </Text>
      </Box>
    </Flex>
  );
};

export default PostHeader;
