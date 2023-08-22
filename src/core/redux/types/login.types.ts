import { loginTypes } from "./../actionTypes/loginTypes";

export interface LoginState {
  currentStep: number;
  phoneNumber: string;
  password: string;
  sixDigitCode: string;
  userEmail: string;
  userNickName: string;
  userBirthDate: string;
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

export type LoginActions = 
  SignUpClicked | 
  ContinueStep2Clicked | 
  ContinueStep3Clicked | 
  ContinueStep4Clicked | 
  ContinueStep5Clicked;