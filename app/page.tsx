import Image from "next/image";
import Header from "./components/Header";
import Profile from "./components/Profile";
import List from "./components/List";
import Footer from "./components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <>

      <div className="body">
        <br />
        <div className="list">
          <List />
        </div>
        <br />
        <div className="image-container">
          <Image
            src="/images/NorahBaderLinkdInPhoto.jpg"
            alt="Norah Bader"
            width={2000}
            height={2000}
          />
        </div>
        <br />
        <br />
        <div>
          <Profile className="profile" />
          <h2> I am Norah Aljulyfi, student </h2>
        </div>
        <div>
          <Header className="hero" name="Norah Bader" title="Software Developer" />
        </div>
        <br />
        <br />


<div>
</div>
        <div><Footer /></div>

      </div>
    </>
  );
}
