import BottomFooter from "./BottomFooter";
import MainFooter from "./MainFooter";
import TopFooter from "./TopFooter";

export default function Footer() {
  return (
    <div className="py-6">
      <div className="container flex-col">
        <TopFooter />
        <MainFooter />
        <BottomFooter />
      </div>
    </div>
  );
}
