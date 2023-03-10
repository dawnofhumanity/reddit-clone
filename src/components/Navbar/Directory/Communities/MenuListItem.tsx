import React from "react";
import { IconType } from "react-icons";
import { Flex, Image, MenuItem } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/icons";
import useDirectory from "@/src/hooks/useDirectory";

type MenuListItemProps = {
  displayText: string;
  link: "/" | `/r/${string}`;
  icon: IconType;
  iconColor: string;
  imageURL?: string;
};

const MenuListItem: React.FC<MenuListItemProps> = ({
  displayText,
  link,
  icon,
  iconColor,
  imageURL,
}) => {
  const { onSelectMenuItem } = useDirectory();

  return (
    <MenuItem
      width={"100%"}
      fontSize={"10pt"}
      _hover={{ bg: "gray.100" }}
      onClick={() =>
        onSelectMenuItem({ displayText, link, icon, iconColor, imageURL })
      }
    >
      <Flex align={"center"}>
        {imageURL ? (
          <Image src={imageURL} borderRadius={"full"} boxSize={"18px"} mr={2} />
        ) : (
          <Icon as={icon} color={iconColor} fontSize={20} mr={2} />
        )}
        {displayText}
      </Flex>
    </MenuItem>
  );
};

export default MenuListItem;
