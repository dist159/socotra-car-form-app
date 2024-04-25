import Image from "next/image";
import "./header.style.scss";

const Header = () => {
  return (
    <div className="container">
      <Image
        priority
        src={"/logo.png"}
        alt={"logo of socotra"}
        width={337}
        height={129}
      />
    </div>
  );
};

export default Header;
