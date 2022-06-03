import { Box } from "@chakra-ui/react";
import ContentLoader from "react-content-loader";

const ImageLoader02 = () => {
  return (
    <Box position="absolute" top="0" bottom="0" left="0" right="0">
      <ContentLoader
        width="100%"
        height="100%"
        speed={0.9}
        backgroundColor={"#0F3460"}
        foregroundColor={"#999"}
        viewBox="0 0 100% 100%"
      >
        <rect width="100%" height="100%" />
      </ContentLoader>
    </Box>
  );
};

export default ImageLoader02;
