import { FormControl, FormControlLabel, RadioGroup, FormLabel, Radio } from '@material-ui/core'
import React from 'react'

function Radiobtn({label,name,value, onChange,Genders}) {
    console.log(Genders)
    return (
      <FormControl>
          <FormLabel>{label} </FormLabel>
              <RadioGroup row name={name} value={value} onChange={onChange}>
                  {Genders.map(gender=>(
                             <FormControlLabel key={gender.id} value={gender.value}
                             label={gender.label}
                             control={<Radio />} />


                             
                  ))}
                 
              </RadioGroup>
         
      </FormControl>
    )
}

export default Radiobtn
