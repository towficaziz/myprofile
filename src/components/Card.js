import { background, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack
      maxW="sm"
      // borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="lg"
      color="#5e5e5e"
      background="white"
      
    >
      <Image src={imageSrc} alt={title} borderRadius="lg"/>

      <VStack p={4} align="start">
        <Heading as="h3" size="md" color="black">
          {title}
        </Heading> 
        <Text fontSize="xs">{description}</Text>
      </VStack>

      <HStack p={4} alignItems="baseline" justify="flex-start" w="full">
        <a href="#">
          <Text fontWeight="bold" display="inline" marginRight="2">
            See more <FontAwesomeIcon icon={faArrowRight} size="1x" />
          </Text>
        </a>
      </HStack>

    </VStack>
  );
};

export default Card;


