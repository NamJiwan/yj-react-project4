
export default function SubtitleImage() {
 return (
 <div className="w-full h-60 overflow-hidden bg-[url('https://plus.unsplash.com/premium_photo-1675756583871-6be3905c4ef4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80')]
     bg-no-repeat bg-cover bg-center
 ">
    <div className="flex p-24 space-x-24 w-full h-full items-center bg-gray-900/30">
        <img src="https://www.daeguoperahouse.org/images/contents/img_logo_white.png" alt="icon" />
        {/* 내용 */}
    <div className="flex flex-col text-white space-y-4">
        <h2 className="text-2xl">(재)대구오페라하우스는 언제나 관객 여러분의 편안하고 쾌적한 공연관람 환경을 위해 최선의 노력을 다하고 있습니다.</h2>
        <p>대구오페라하우스에서 진행되는 모든 공연은 언제나 인터넷 예매가 가능하오나, 일부 대관공연은 주관사의 운영형태에 따라 동일한 서비스가 제공되지 않을 수 있사오니 이 점 양해 부탁드립니다.</p>
    </div>
    </div>
    
 </div>
 )
}