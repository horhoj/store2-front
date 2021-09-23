import React, { useEffect, useRef, useState } from 'react';
import { TextField } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
import styled from 'styled-components';
import { DebouncedInputProps } from './types';

export const DebouncedInput: React.FC<DebouncedInputProps> = ({
  placeholder,
  disabled,
  handleSearchCb,
  value,
  delay,
}) => {
  const [internalSearchStr, setInternalSearchStr] = useState<string>('');
  const [isInputFocused, setIsInputFocused] = useState<boolean>(false);
  const searchInputRef = useRef<HTMLTextAreaElement>(null);

  const handle = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setInternalSearchStr(value);
  };

  useEffect(() => {
    const id = setTimeout(() => {
      if (internalSearchStr !== value) {
        handleSearchCb(internalSearchStr);
        setIsInputFocused(true);
      }
    }, delay);
    return () => {
      clearInterval(id);
    };
  }, [internalSearchStr]);

  useEffect(() => {
    setInternalSearchStr(value);
  }, [value]);

  useEffect(() => {
    if (!disabled && isInputFocused && searchInputRef.current) {
      searchInputRef.current.focus();
      setIsInputFocused(false);
    }
  }, [disabled]);

  return (
    <StyledTextField
      placeholder={placeholder}
      disabled={disabled}
      onChange={handle}
      value={internalSearchStr}
      inputRef={searchInputRef}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  );
};

const StyledTextField = styled(TextField)`
  width: 100%;
`;
