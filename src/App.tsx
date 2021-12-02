import {
  ChakraProvider, Box,
} from "@chakra-ui/react";
import {
  HashRouter as Router,
} from "react-router-dom";
import { RecoilRoot } from "recoil";
import { QueryClient, QueryClientProvider } from "react-query";
import TopBanner from "./components/TopBanner";
import Banner from "./components/Banner";
import SearchSection from "./components/SearchSection";
import Footer from "./components/footer/Footer";

const queryClient = new QueryClient();

function AppContent() {
  return (
    <>
      <TopBanner />
      <Banner />
      <SearchSection />
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <RecoilRoot>
      <ChakraProvider>
        <Router>
          <QueryClientProvider client={queryClient}>

            <AppContent />

          </QueryClientProvider>
        </Router>
      </ChakraProvider>
    </RecoilRoot>
  );
}
