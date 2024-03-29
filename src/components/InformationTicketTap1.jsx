import SubtitleIcon from "./SubtitleIcon";
import SubtitleImage from "./SubtitleImage";

export default function InformationTicketTap1() {
    return (
        <div className="w-full space-y-16">
            <SubtitleImage />

            {/* 1 인터넷 예매 */}
            <div className="w-full flex flex-col space-y-6">
                <SubtitleIcon title='인터넷예매' />
                <div className="space-y-2 px-6" >
                    <p>- 대구오페라하우스 : daeguoperahouse.org</p>
                    <p>- 인터파크 : ticketpark.com</p>
                    <p>- 대구오페라하우스 홈페이지를 통해서 예매하시면 예매수수료가 없습니다.</p>
                </div>
            </div>

            {/* 2 전화예매 */}
            <div className="w-full flex flex-col space-y-6">
                <SubtitleIcon title='전화예매' />
                <div className="space-y-2 px-6" >
                    <p>- 대구오페라하우스 : daeguoperahouse.org</p>
                    <p>- 인터파크 : ticketpark.com</p>
                    <p>- 대구오페라하우스 홈페이지를 통해서 예매하시면 예매수수료가 없습니다.</p>
                </div>
            </div>

            {/* 3 입장권예매 */}
            <div className="w-full flex flex-col space-y-6">
                <SubtitleIcon title='입장권예매' />
                <div className="space-y-2 px-6" >
                    <p>- 공연 당일 수령 - 공연시작 1시간 30분 전부터 1층 매표소에서 수령</p>
                    <p>- 티켓 수령시 예매자명과 예매번호를 정확히 알고 오시면 티켓 수령이 좀 더 원활할 수 있습니다.</p>
                    <p>- 입장권 분실 및 파손 시 재발급이 되지 않으니 보관에 유의하여 주십시오.</p>
                    <p>- 현장매표소 운영은 공연 당일 본관 1층에서만 진행하며, 공연 시작 1시간 30분 전부터 공연시작 전까지 구입가능 합니다.</p>
                </div>
            </div>
            {/* 기본할인안내 */}
            <div className="w-full flex flex-col space-y-6">
                <SubtitleIcon title='기본할인안내' />
                <table className="table_top">
                    <tbody>
                        <tr>
                            <td rowSpan={3} className="table-td border-l-0 text-center">기본할인</td>
                            <td className="table-td text-center">10%</td>
                            <td className="table-td">* 대구오페라하우스 홈페이지 예매 시</td>
                        </tr>
                        <tr>
                            <td className="table-td text-center">20%</td>
                            <td className="table-td">* 20인 이상
                                <br />
                                * 문화패스(청소년 및 대학생 8세~24세)</td>
                        </tr>
                        <tr>
                            <td className="table-td text-center">30%</td>
                            <td className="table-td">* 65세 이상(본인)
                                <br />
                                * 장애인(동반 1인 포함)
                                <br />
                                * 국가유공자(본인)</td>
                        </tr>
                        <tr>
                            <td rowSpan={3} className="table-td border-l-0 text-center">특별할인</td>
                            <td rowSpan={2} className="table-td text-center">20%</td>
                            <td className="table-td">* 대구오페라하우스 홈페이지 예매 시
                                <br />
                                * 문화누리카드</td>
                        </tr>
                        <tr>
                            <td className="table-td">* 대구오페라하우스 홈페이지 예매 시
                                <br />
                                * 문화누리카드</td>
                        </tr>
                        <tr>
                            <td className="table-td text-center">30%</td>
                            <td className="table-td">* 대구오페라하우스 홈페이지 예매 시
                                <br />
                                * 문화누리카드</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}