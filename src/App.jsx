import { useState, useEffect } from "react";
import { Stack, useDisclosure } from "@chakra-ui/react";
import Header from "./components/Header";
import Forest from "./components/Forest";
import SearchDrawer from "./components/SearchDrawer";
import forestData from "./ke_forest_sliders.json";
import Footer from "./components/Footer";

const App = () => {
  const [activeForest, setActiveForest] = useState({});
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    // Set random forest on page load
    const randomForestId = Math.round(Math.random() * forestData.length);

    setActiveForest(forestData[randomForestId]);
  }, []);

  return (
    <Stack bg="whitesmoke" minHeight={"100vh"}>
      <Header onOpen={onOpen} />

      <SearchDrawer
        isOpen={isOpen}
        onClose={onClose}
        setActiveForest={setActiveForest}
      />
      <Forest activeForest={activeForest} />
      <Footer />
    </Stack>
  );
};

export default App;
