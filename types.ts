export interface IToast {
  closeToast: any;
  toastProps: any;
}

export interface IToastCustom {
  message: string;
  button: string;
}

export interface ISignature {
  position: string;
  signature: string;
  name: string;
}

export interface IRedactedText {
  theme?: string;
}

export interface IHomeSection {
  myRef: any;
  showSpyCheck: boolean;
  setShowSpyCheck: any;
  setDidntPass: any;
}

export interface IClassic {
  id: string;
  name: string;
  dateOfBirth: string;
  shortBio: string;
  image: string;
  link: string;
  fullBio: string;
  title: string;
}
