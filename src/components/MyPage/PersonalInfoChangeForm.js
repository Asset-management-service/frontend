import styled from 'styled-components';
import React, {useState} from 'react';
const Button = styled.button`
  display: inline-block;
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  display: block;
`;

const Nickname = styled.div`
  
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

const onPhoneNoHandler = (event) => { //핸드폰 번호 재설정
      setPhoneNo(event.currentTarget.value);
}

const onEmailHandler = (event) => { //이메일 재설정
    setEmail(event.currentTarget.value)
}

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

class RadioButton extends React.Component {
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
      //하나가 트루이면 하나가 false로 바뀌게 수정
    });
}

  render() {
    return (
        <span>
        Man: <input id="man" value="man" name="gender" type="radio" onChange={this.onGenderHandler} />
        Woman: <input id="woman" value="woman" name="gender" type="radio" onChange={this.onGenderHandler} />
        </span>
    );
  }
}
//이메일, 핸드폰 입력 타입 변경
//주소는 저번 회의 때 이야기 했던 대로, 제외
    return(
        /*비밀번호 변경, 닉네임 변경, 핸드폰 번호 변경, 이메일 변경, 성별 변경 가능*/
            <section>
                <h2>개인 정보 변경</h2>
                <form>
                    <Nickname>닉네임: <input type="text" placeholder='닉네임' value={nickname} onChange={onNicknameHandler} /></Nickname>
                    <div>핸드폰 번호: <input type="tel" id="phone" name="phone" placeholder="010-0000-0000" pattern="[0-1]{3}-[0-9]{4}-[0-9]{4}" value={phoneNo} onChange={onPhoneNoHandler} required></input></div>
                    <div>이메일: <input type="email" id="email" name="email" value={email} onChange={onEmailHandler}></input></div>
                    <div>성별: <RadioButton></RadioButton></div>
                    <Button>개인정보 변경하기</Button>
                </form>
            </section>
    );
    }

export default PersonalInfoChangeForm;