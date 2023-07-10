import InformationTicketTap1 from "../components/InformationTicketTap1";
import Layout from "../components/Layout";
import LayoutContents from "../components/LayoutContents";
import LayoutTap from "../components/LayoutTap";
import Subtitle from "../components/Subtitle";

const tabList = [
    { title: '예매안내', children: <InformationTicketTap1 /> },
    { title: '예매확인', children: 'second element' },
    { title: '환불취소안내', children: 'third element' },
    { title: '환불취소안내', children: 'third element' },
    
];

export default function InformationTicket() {
 return (
    <Layout>
        <Subtitle firstTitle={'공연안내'} secondTitle={'티켓정보'} />
        <LayoutContents title='티켓정보'>
        {/* 탭 레이아웃 */}
        <LayoutTap tabList={tabList} numbers={`grid-cols-${tabList.length}`} />
        </LayoutContents>
    </Layout>
 )
}