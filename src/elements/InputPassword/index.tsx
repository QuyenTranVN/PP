import React from 'react'
import { FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton } from '@mui/material'
import Icon from '@mui/material/Icon'
import { Controller } from 'react-hook-form'
import { convertToRem } from 'utils/convertToRem'
import { InputProps } from './input.type'
import styles from './input.module.scss'
import VisibilityOff from 'assets/icons/visibilityOff'
import Visibility from 'assets/icons/visibility'
const Input: React.FC<InputProps> = ({
  label,
  name,
  control,
  startAdornment,
  endAdornment,
  type,
  height = 46,
  width = '100%',
  customStyle = '',
  onKeyDown,
  placeholder,
  containerStyle = '',
  radius = 4,
  disabled,
  register
}) => {
  const [showPassword, setShowPassword] = React.useState(false)
  const handleClickShowPassword = () => {
    setShowPassword((prev: boolean) => !prev)
  }
  const handleMouseDownPassword = () => {
    setShowPassword((prev: boolean) => !prev)
  }
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
        render={({ field: { onChange, value } }) => (
          <OutlinedInput
            disabled={disabled}
            id={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            startAdornment={startAdornment}
            inputProps={{
              autoComplete: 'off'
            }}
            {...register(name)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword}>
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            className={`${styles.input_custom} ${customStyle}`}
            type={showPassword ? 'text' : 'password'}
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
