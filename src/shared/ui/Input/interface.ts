export interface InputProps {
  type?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  name?: string;
  rightText?: string;
  warningText?: string;
  upText?: string;
  placeholder?: string;
  inputRef?: React.RefObject<HTMLInputElement> | null;
}
