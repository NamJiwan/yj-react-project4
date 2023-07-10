
export default function TableRentalNotice() {
    return (
        <div className="w-full grid">
            <div className="grid grid-cols-12 py-4 text-center bg-neutral-100 border-t-2 border-b-0.5 border-neutral-500">
                <div>No</div>
                <div className="col-span-7">제목</div>
                <div className="col-span-2">작성자</div>
                <div className="col-span-2">작성일</div>
            </div>
            <div>
                <div className="grid grid-cols-12 py-4 text-center border-b border-neutral-200 cursor-pointer hover:bg-red-50">
                    <div>No</div>
                    <div className="col-span-7">제목</div>
                    <div className="col-span-2">작성자</div>
                    <div className="col-span-2">작성일</div>
                </div>
            </div>
        </div>
    )
}