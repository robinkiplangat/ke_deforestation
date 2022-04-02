import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Stack,
  Text,
  Divider,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import forestData from "../ke_forest_sliders.json";

const SearchDrawer = ({ isOpen, onClose, setActiveForest }) => {
  const handleClick = (forest) => {
    onClose();
    setActiveForest(forest);
  };

  return (
    <>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose} variant="#333">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader boxShadow={"xl"}>Deforestation KE</DrawerHeader>

          <DrawerBody>
            <Stack spacing={"5px"} divider={<Divider />}>
              {forestData.map((forest, index) => {
                return (
                  <Text
                    fontWeight={800}
                    padding={"5px"}
                    key={"forest" + index}
                    cursor="pointer"
                    onClick={() => handleClick(forest)}
                  >
                    {forest.Forest}
                  </Text>
                );
              })}
            </Stack>
          </DrawerBody>

          <DrawerFooter>
            <Alert status="info" fontSize={"sm"}>
              <AlertIcon />
              Use slider to see differences in the landscape
            </Alert>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default SearchDrawer;
