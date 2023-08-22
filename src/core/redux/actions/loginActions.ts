import { loginTypes } from "./../actionTypes/loginTypes";
import { 
  SignUpClicked,
  SignUpStep1Payload,
  ContinueStep2Payload,
  ContinueStep2Clicked,
  ContinueStep3Payload,
  ContinueStep3Clicked, 
  ContinueStep4Payload,
  ContinueStep4Clicked,
  ContinueStep5Payload,
  ContinueStep5Clicked,
  ContinueStep6Clicked,
  ContinueStep6Payload,
  ContinueStep7Payload,
  ContinueStep7Clicked,
  ContinueStep8Payload,
  ContinueStep8Clicked
} from "../types/login.types";

export const signUpClicked = (payload: SignUpStep1Payload): SignUpClicked => ({
  type: loginTypes.SIGN_UP_CLICKED,
  payload
});

export const continueStep2Clicked = (payload: ContinueStep2Payload): ContinueStep2Clicked => ({
  type: loginTypes.CONTINUE_STEP_2_CLICKED,
  payload
});

export const continueStep3Clicked = (payload: ContinueStep3Payload): ContinueStep3Clicked => ({
  type: loginTypes.CONTINUE_STEP_3_CLICKED,
  payload
});

export const continueStep4Clicked = (payload: ContinueStep4Payload): ContinueStep4Clicked => ({
  type: loginTypes.CONTINUE_STEP_4_CLICKED,
  payload
});

export const continueStep5Clicked = (payload: ContinueStep5Payload): ContinueStep5Clicked => ({
  type: loginTypes.CONTINUE_STEP_5_CLICKED,
  payload
});

export const continueStep6Clicked = (payload: ContinueStep6Payload): ContinueStep6Clicked => ({
  type: loginTypes.CONTINUE_STEP_6_CLICKED,
  payload
});

export const continueStep7Clicked = (payload: ContinueStep7Payload): ContinueStep7Clicked => ({
  type: loginTypes.CONTINUE_STEP_7_CLICKED,
  payload
});

export const continueStep8Clicked = (payload: ContinueStep8Payload): ContinueStep8Clicked => ({
  type: loginTypes.CONTINUE_STEP_8_CLICKED,
  payload
});
