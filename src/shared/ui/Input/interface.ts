export interface InputProps {
  type?: string;
  handler?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  name?: string;
  rightText?: string;
  warningText?: string;
  upText?: string;
  placeholder?: string;
}
