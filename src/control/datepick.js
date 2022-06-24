import DateFnsUtils from '@date-io/date-fns'
import { TextField } from '@material-ui/core'

import { KeyboardDatePicker, KeyboardDateTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'
import React from 'react'




function Datepick({name, label, value, onChange}) {


    const convertoteventparse=(name, value)=>({
        target:{
            name, value
        }
    })

    return (

       
        <form  noValidate>
        <TextField
         variant='outlined'
          label={label}
          type="date"
          name={name}
          formatDate={(date) => (date).format('DD-MM-YYYY')}
          defaultValue={value}
         onChange={date=>onChange(convertoteventparse(name, date.target.value))}
          InputLabelProps={{
            shrink: true,
          }}
        />
        </form>
    
    )
}

export default Datepick
