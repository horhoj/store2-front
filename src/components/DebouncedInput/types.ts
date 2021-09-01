export interface DebouncedInputProps {
  placeholder: string;
  disabled: boolean;
  handleSearchCb(searchStr: string): void;
  value: string;
  delay: number;
}
