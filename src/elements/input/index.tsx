import React from 'react'
import { FormControl, InputLabel, OutlinedInput } from '@mui/material'
import { Controller } from 'react-hook-form'
import { convertToRem } from 'utils/convertToRem'
import { InputProps } from './input.type'
import { formatPhoneNumber } from 'utils/formatPhoneNumber'
import styles from './input.module.scss'
const phoneNumberReplaceRegex = /[(a-zA-Z)(?=.*!@#$%^&*()+_/;:"'/?>.,<[{}\])ươƯƠ]/g
const Input: React.FC<InputProps> = ({
  label,
  name,
  control,
  startAdornment,
  endAdornment,
  type,
  height = 46,
  width = '100%',
  inputProps,
  customStyle = '',
  onKeyDown,
  placeholder,
  containerStyle = '',
  radius = 4,
  disabled,
  register
}) => {
  return (
    <FormControl
      variant="outlined"
      className={`${styles.form_control} ${containerStyle}`}
      sx={{
        width: convertToRem(width)
      }}
    >
      {!!label && (
        <InputLabel htmlFor={name} className={styles.input_label}>
          {label}
        </InputLabel>
      )}
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value }, fieldState: { invalid, isTouched, isDirty, error } }) => (
          <OutlinedInput
            disabled={disabled}
            id={name}
            value={typeof value === 'object' ? value?.name : value}
            onChange={({ target: { value } }) => onChange(value)}
            placeholder={placeholder}
            startAdornment={startAdornment}
            endAdornment={endAdornment}
            {...register(name, {
              setValueAs: (v: any) => (type === 'tel' ? formatPhoneNumber(v.replace(phoneNumberReplaceRegex, '')) : v)
            })}
            inputProps={{
              autoComplete: 'off',
              maxLength: type === 'tel' ? 13 : name === 'otp' ? 6 : undefined,
              ...inputProps
            }}
            className={`${styles.input_custom} ${customStyle} ${disabled && styles.disabled}`}
            type={type}
            sx={{
              height: convertToRem(height),
              borderRadius: convertToRem(radius)
            }}
            onKeyDown={e => {
              if (onKeyDown) onKeyDown(e)
            }}
          />
        )}
      />
    </FormControl>
  )
}

export default Input
