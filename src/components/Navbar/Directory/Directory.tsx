import {
  Flex,
  Image,
  Menu,
  MenuButton,
  MenuList,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { ChevronDownIcon, Icon } from "@chakra-ui/icons";
import Communities from "@/src/components/Navbar/Directory/Communities/Communities";
import useDirectory from "@/src/hooks/useDirectory";

const Directory: React.FC = () => {
  const {
    directoryMenuState: { isOpen, selectedMenuItem },
    toggleMenuOpen,
  } = useDirectory();

  return (
    <Menu isOpen={isOpen}>
      <MenuButton
        cursor="pointer"
        padding="0px 6px"
        borderRadius={4}
        mr={2}
        ml={{ base: 0, md: 2 }}
        _hover={{ outline: "1px solid", outlineColor: "gray.200" }}
        onClick={toggleMenuOpen}
      >
        <Flex
          align="center"
          justify="space-between"
          width={{ base: "auto", lg: "200px" }}
        >
          <Flex align="center">
            {selectedMenuItem.imageURL ? (
              <Image
                src={selectedMenuItem.imageURL}
                borderRadius={"full"}
                boxSize={"24px"}
                mr={2}
              />
            ) : (
              <Icon
                fontSize={24}
                mr={{ base: 1, md: 2 }}
                as={selectedMenuItem.icon}
                color={selectedMenuItem.iconColor}
              />
            )}
            <Flex display={{ base: "none", lg: "flex" }}>
              <Text fontWeight={600} fontSize="10pt">
                {selectedMenuItem.displayText}
              </Text>
            </Flex>
          </Flex>
          <ChevronDownIcon />
        </Flex>
      </MenuButton>
      <MenuList>
        <Communities />
      </MenuList>
    </Menu>
  );
};

export default Directory;
