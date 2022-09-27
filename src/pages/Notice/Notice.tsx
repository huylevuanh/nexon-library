import { Table } from "@mantine/core";
import PageHeader from "../../components/PageHeader/PageHeader";
import "./Notice.scss";

const Notice = (): JSX.Element => {
  return (
    <div className="notice-page-container">
      <PageHeader
        backgroundUrl="https://nexonlibrary.com/assets/front/images/bg_sub_notice.jpg"
        title="BULLETIN"
        subtitle="LASTEST_ANNOUCEMENT"
      />
      <div className="main-layout notice-list-container">
        <Table fontSize={16}>
          <tbody>
            <tr>
              <td className="text-center">1</td>
              <td className="text-left">
                Announcement of winners of Nexon Little Bookstore support
                participation event
              </td>
              <td>2022.07.11</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Notice;
