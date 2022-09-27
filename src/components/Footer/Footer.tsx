import { Button, Select } from "@mantine/core";
import { RiArrowDownSLine } from "react-icons/ri";
import { footerDropdown } from "../../constants";

import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <div className="text-content">
          <p>Nexon Small Library</p>
          <p>© 2019 NEXON CORPORATION ALL RIGHTS RESERVED.</p>
        </div>
        <div className="button-container">
          <Button>PRIVACY NOTICE</Button>
          <Select
            defaultValue={footerDropdown[0].title}
            rightSection={<RiArrowDownSLine />}
            rightSectionWidth={30}
            styles={{ rightSection: { pointerEvents: "none" } }}
            data={footerDropdown.map((item) => item.title)}
          ></Select>
        </div>
      </div>
    </div>
  );
};

export default Footer;
