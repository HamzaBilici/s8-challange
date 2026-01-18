import MainBanner from "./components/MainBanner.jsx";
import Content from "./components/Content.jsx";

function Home() {
  return (
    <div className="flex flex-column items-center">
      <MainBanner />
      <Content />
    </div>
  );
}

export default Home;
