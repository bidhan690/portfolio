import "@/styles/globals.css";
import Layout from "@/components/header/Layout";
import { AnimatePresence, motion } from "framer-motion";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ y: "-100px" }}
          animate={{ y: 0 }}
          exit={{ x: "1000px" }}
          transition={{ duration: 0.3 }}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
}
