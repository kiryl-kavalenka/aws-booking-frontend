import { loginTypes } from "./../actionTypes/loginTypes";

export interface LoginState {
  currentStep: number;
  phoneNumber: string;
  password: string;
  sixDigitCode: string;
  userEmail: string;
  userNickName: string;
  userBirthDate: string;
  userSelectedGender: string;
  userSelectedOrientations: string[];
  showUsersGender: boolean;
  showUsersOrientations: boolean;
  showUserTo: string;
  userImages: File[];
}

export interface SignUpClicked {
  type: typeof loginTypes.SIGN_UP_CLICKED;
  payload: SignUpStep1Payload
}

export interface ContinueStep2Clicked {
  type: typeof loginTypes.CONTINUE_STEP_2_CLICKED;
  payload: ContinueStep2Payload
}

export interface ContinueStep3Clicked {
  type: typeof loginTypes.CONTINUE_STEP_3_CLICKED;
  payload: ContinueStep3Payload
}

export interface ContinueStep4Clicked {
  type: typeof loginTypes.CONTINUE_STEP_4_CLICKED;
  payload: ContinueStep4Payload
}

export interface ContinueStep5Clicked {
  type: typeof loginTypes.CONTINUE_STEP_5_CLICKED;
  payload: ContinueStep5Payload
}

export interface ContinueStep6Clicked {
  type: typeof loginTypes.CONTINUE_STEP_6_CLICKED;
  payload: ContinueStep6Payload
}

export interface ContinueStep7Clicked {
  type: typeof loginTypes.CONTINUE_STEP_7_CLICKED;
  payload: ContinueStep7Payload
}

export interface ContinueStep8Clicked {
  type: typeof loginTypes.CONTINUE_STEP_8_CLICKED;
  payload: ContinueStep8Payload
}

export interface SignUpStep1Payload {
  phoneNumber: string;
  password: string;
}

export interface ContinueStep2Payload {
  sixDigitCode: string;
}

export interface ContinueStep3Payload {
  userEmail: string;
}

export interface ContinueStep4Payload {
  userNickName: string;
}

export interface ContinueStep5Payload {
  userBirthDate: string;
}

export interface ContinueStep6Payload {
  userSelectedGender: string;
  userSelectedOrientations: string[];
  showUsersGender: boolean;
  showUsersOrientations: boolean;
}

export interface ContinueStep7Payload {
  showUserTo: string;
}

export interface ContinueStep8Payload {
  userImages: File[];
}

export type LoginActions = 
  SignUpClicked | 
  ContinueStep2Clicked | 
  ContinueStep3Clicked | 
  ContinueStep4Clicked | 
  ContinueStep5Clicked |
  ContinueStep6Clicked |
  ContinueStep7Clicked |
  ContinueStep8Clicked;