import { Stack, Text } from "@chakra-ui/react";
import { useState } from "react";
import Loader from "./Loader";
import Iframe from "react-iframe";

const Forest = ({ activeForest }) => {
  const [loading, setLoading] = useState(true);

  const handleLoad = () => {
    setLoading(false);
  };
  return (
    <Stack width={"100%"} height="container.md" justify="center" align="center">
      <Text
        as={"h2"}
        fontSize={"1.2rem"}
        fontWeight={"700"}
        textTransform="uppercase"
      >
        {activeForest.Forest}
      </Text>
      <Stack
        height="100%"
        width="100%"
        borderColor="#eee"
        borderTop={"2px"}
        display="flex"
        align="center"
        justify="center"
      >
        {/* {loading ? (
          <Loader /> */}
        {/* ) : ( */}
        <Iframe
          url={activeForest.Slider}
          width="100%"
          height="100%"
          loading="lazy"
          display="initial"
          position="relative"
          // onLoad={handleLoad}
        />
        {/* )} */}
      </Stack>
      <Text textTransform="capitalize">{activeForest.Description}</Text>)
    </Stack>
  );
};

export default Forest;
