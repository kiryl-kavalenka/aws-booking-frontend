import { loginTypes } from "./../actionTypes/loginTypes";
import { LoginState, LoginActions } from "../types/login.types";

const initialState: LoginState = {
  currentStep: 0,
  phoneNumber: '',
  password: '',
  sixDigitCode: '',
  userEmail: '',
  userNickName: '',
  userBirthDate: '',
};


const loginReducer = (state = initialState, action: LoginActions) => {
  switch (action.type) {
    case loginTypes.SIGN_UP_CLICKED:
      return {
        ...state,
        currentStep: state.currentStep + 1,
        phoneNumber: action.payload.phoneNumber,
        password: action.payload.password
      };
    case loginTypes.CONTINUE_STEP_2_CLICKED:
      return {
        ...state,
        sixDigitCode: action.payload.sixDigitCode
      }
    case loginTypes.CONTINUE_STEP_3_CLICKED:
      return {
        ...state,
        userEmail: action.payload.userEmail
      }
    case loginTypes.CONTINUE_STEP_4_CLICKED:
      return {
        ...state,
        userNickName: action.payload.userNickName
      }
    case loginTypes.CONTINUE_STEP_5_CLICKED:
      return {
        ...state,
        userBirthDate: action.payload.userBirthDate
      }
    default:
      return {
        ...state,
      };
  }
};

export default loginReducer;
