import { useState } from 'react';


export const useForm = <T extends Object>(initState: T) => {

     const [state, setState] = useState(initState);

     // K de tipo objeto que retorna ese mismo objeto
     // Ej: {} => {}   -   [] => [],   -   boolean => boolean
     const onChange = <K extends Object>(value: K, field: keyof T) => {
          setState({
               ...state,
               [field]: value,
          });
     };

     return {
          ...state,
          form: state,
          onChange,
     };

};
