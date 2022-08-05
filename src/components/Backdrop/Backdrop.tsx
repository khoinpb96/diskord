import { motion } from "framer-motion";
import styled from "styled-components";

const Backdrop = styled(motion.div)`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.85);
  z-index: 1;
`;

export default Backdrop;
