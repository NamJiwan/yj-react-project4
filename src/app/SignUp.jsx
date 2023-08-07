import { Link } from "react-router-dom";
import ButtonSlide from "../components/ButtonSlide";
import Layout from "../components/Layout";
import LayoutContents from "../components/LayoutContents";
import { useForm } from "react-hook-form";
import Modal from "react-modal";
import { useState } from "react";

export default function SignUp() {
    const [modalIsOpen, setIsOpen] = useState(false);
    console.log(modalIsOpen)
    const closeModal = () =>{
        setIsOpen(false);
    }
    const openModal = () => {
        setIsOpen(true);
    }
    const customStyles = {
        content: {
          width:"600px",
          top: '30%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      };
    const { register, handleSubmit,watch , formState: { errors } } = useForm({mode:"onChange"});
    console.log(watch("password"))
    return (
        <div>
            <Layout>
                <Modal 
                    isOpen={modalIsOpen}
                    style={customStyles}
                    onRequestClose={closeModal}
                >

                </Modal>
                <LayoutContents title="회원가입">
                    <form>
                        <table className="table_top w-full">
                            <tbody>
                                <tr>
                                    <td className="table_td border-l-0">회원아이디</td>
                                    <td className="table_td border-l-0 space-x-2">
                                        <input
                                            {...register("username",{
                                                required: "아이디는 필수 입력항목입니다.",
                                                minLength: {
                                                    value : 6,
                                                    message : "아이디는 6자이상 입력해야 합니다."
                                                }
                                            })}
                                            type="text" className="border border-neutral-300 p-2" />
                                            <span className="text-red-500 text-sm">{errors?.username?.message}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="table_td border-l-0">비밀번호</td>
                                    <td className="table_td border-l-0 ">
                                        <input
                                            {...register("password")}
                                            type="password" className="border border-neutral-300 p-2" />
                                    </td>
                                </tr>
                                <tr>
                                    <td className="table_td border-l-0">비밀번호 확인</td>
                                    <td className="table_td border-l-0 space-x-2">
                                        <input
                                            {...register("password2")}
                                            type="password" className="border border-neutral-300 p-2" />
                                            {watch("password") !== watch("password2") && (
                                                <span  className="text-red-500 text-sm">비밀번호는 같아야 합니다.</span>
                                            )}
                                            
                                    </td>
                                </tr>
                                <tr>
                                    <td className="table_td border-l-0">이름</td>
                                    <td className="table_td border-l-0 ">
                                        <input
                                            {...register("name")}
                                            type="text" className="border border-neutral-300 p-2" />
                                    </td>
                                </tr>
                                <tr>
                                    <td className="table_td border-l-0">휴대전화</td>
                                    <td className="table_td border-l-0 ">
                                        <input
                                            {...register("mobile")}
                                            type="text" className="border border-neutral-300 p-2" />
                                    </td>
                                </tr>
                                <tr>
                                    <td className="table_td border-l-0">이메일</td>
                                    <td className="table_td border-l-0 space-x-2">
                                        <input
                                            {...register("email",{
                                                required:"이메일 항목은 필수 입력사항입니다.",
                                                minLength:{
                                                    value:5,
                                                    message:"최소 5자 이상 작성해 주셔야 합니다."
                                                },
                                                pattern:{
                                                    value: /[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]$/i,
                                                    message:"이메일 형식을 맞춰 주셔야 합니다."
                                                }
                                            })}
                                            type="email" className="border border-neutral-300 p-2" />
                                            <span  className="text-red-500 text-sm">{errors?.email?.message}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="table_td border-l-0">주소</td>
                                    <td className="table_td border-l-0">
                                        <div className=" space-x-2">
                                            <input type="text"
                                                {...register("zipcode")}
                                                disabled className="border border-neutral-300 p-2 bg-neutral-50" />
                                            <button type="button" onClick={openModal} className="px-4 py-2 rounded text-sm border border-neutral-300 hover:shadow-md">우편번호검색</button>
                                        </div>
                                        <input type="text"
                                            {...register("address1")}
                                            disabled className="border border-neutral-300 p-2 bg-neutral-50 w-full" />
                                        <input type="text"
                                            {...register("address2")}
                                            className="border border-neutral-300 p-2 w-full" />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="w-full flex justify-center space-x-2 py-8">
                            <ButtonSlide text="회원가입" />
                            <Link to='/'><ButtonSlide text="메인으로" /></Link>
                        </div>
                    </form>
                </LayoutContents>
            </Layout>
        </div>
    )
}