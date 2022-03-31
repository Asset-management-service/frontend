import styled from 'styled-components';
import React, {useState} from 'react';

const RegisterWrapper = styled.registerWrapper`

`;

const Title = styled.title`
    
`;

const IdForm = styled.idForm`
    color: red;
    font-size: small;
`;


const Password = styled.password`
    color: red;
    font-size: small;
`;

const PasswordCheck = styled.passwordCheck`

`;

function PersonalInfoChangeForm(){
    const [nickname , setNickname] = useState(" ");
    const [password , setPassword] = useState(" ");
    const [confirmPassword , setConfirmPassword] = useState(" ");
    const [phoneNo , setPhoneNo] = useState(" ");
    const [email , setEmail] = useState(" ");
    const [date, setDate] = useState(" ");

const onNicknameHandler = (event) => { //닉네임 재설정
    setNickname(event.currentTarget.value)
}

const onPasswordHandler = (event) => { //비밀번호 재설정
    setPassword(event.currentTarget.value)
}

const onConfirmPasswordHandler = (event) => { //비밀번호 재설정 확인
    setConfirmPassword(event.currentTarget.value)
}

const onPhoneNoHandler = (event) => { //핸드폰 번호 재설정
    setPhoneNo(event.currentTarget.value)
}

const selectOptions = [ //드롭박스 내용
	{ value: "naver.com", name: "네이버" },
	{ value: "google.com", name: "구글" },
	{ value: "daum.net", name: "다음" },
];

const selectBox = (props) => {
    const onEmailHandler = (event) => { //이메일 핸들러 추가
        setEmail(event.currentTarget.value)
    };
     //드롭박스 옵션을 props로 받기
	return (
		<select onChange={onEmailHandler}>
			{props.options.map((option) => (
				<option
                    key={option.value}
					value={option.value}
					defaultValue={props.defaultValue === option.value}
				>
					{option.name}
				</option>
			))}
		</select>
	);
};

class radioButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        man: true,
        woman: false
    };
  }

  onGenderhandler(event) {
      const { name, value } = event.target;
      this.setState({
      [name]: value
    });
}

  render() {
    return (
      <div className="radio-buttons">
        Man: <input id="man" value="man" type="radio" onChange={this.onGenderlHandler} />
        Woman: <input id="woman" value="woman"type="radio" onChange={this.onGenderlHandler} />
      </div>
    );
  }
}

let message=document.lastModified;
let the_date=message.length-8;
document.getElementById('updateDate').innerHTML="최종 업데이트일: "+message.substring(the_date, 0);

const onSubmit = (event) => { 

    event.preventDefault()
    
    //비밀번호 조건에 부합하는지 확인
    if(password.length<8 || password.length>17){ //1. 비밀번호는 8자 이상, 16자 이하
        document.getElementById('pwConditon').innerHTML='비밀번호는 영어, 숫자, 특수문자를 모두 포함해 작성해주세요';
        document.getElementById('pwCondition').style.color='red';
    }

    let pwArray = ["!","@","#","$","%","^","&","*","(",")","_","-","=","+"]; //2. 비밀번호는 무조건 특수 문자를 포함해야 함
    let pwArrayCheck = 0;
    for(let i=0;i<pwArray.length;i++){
        if(password.indexOf(pwArray[i]) !== -1){
            pwArrayCheck = 1;
        }
    }

    if(pwArrayCheck === 0){
        document.getElementById('pwConditon').innerHTML='비밀번호는 영어, 숫자, 특수문자를 모두 포함해 작성해주세요';
        document.getElementById('pwCondition').style.color='red';
    }

    //비밀번호 재설정값과 재설정 확인 값이 같은지 확인

    if(password !== confirmPassword) {
      document.getElementById('pwCheck').innerHTML='비밀번호가 일치하지 않습니다.';
      document.getElementById('pwCheck').style.color='red';
    }


}

//주소는 저번 회의 때 이야기 했던 대로, 제외
    return(
        /*비밀번호 변경, 닉네임 변경, 핸드폰 번호 변경, 이메일 변경, 성별 변경 가능*/
        <div class="personalinfochangeform">
            <Title>개인정보 변경</Title>
            <form>
                <div>비밀번호: <input type="password" placeholder='비밀번호' value={password} onChange={onPasswordHandler} />
                &nbsp;
                <span id="pwCondition"></span></div>
                <div>비밀번호 재확인: <input type="password" placeholder='비밀번호 재확인' value={confirmPassword} onChange={onConfirmPasswordHandler} />
                &nbsp;
                <span id="pwCheck"></span></div>
                <div>닉네임: <input type="text" placeholder='닉네임' value={nickname} onChange={onNicknameHandler} /></div>
                <div>핸드폰 번호: <input type="text" placeholder='핸드폰 번호' maxlength="13" value={phoneNo} onChange={onPhoneNoHandler} /></div>
                <div>이메일: <selectBox options={selectOptions} defaultValue="naver.com"></selectBox></div>
                <div>성별: <radioButton></radioButton></div>
                <div>최종 업데이트일: <span id="updateDate"></span></div>
                <div><button type="submit" onSubmit={onSubmit} class="personalinfochangeform_button">개인정보 변경하기</button></div>
            </form>
        </div>
    );

export default PersonalInfoChangeForm;