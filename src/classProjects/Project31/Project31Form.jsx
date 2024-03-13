import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { RadioButton } from 'primereact/radiobutton';
import { Button } from 'primereact/button';

import CPNavBar from '../_CPNavBar';
import './Project31Styles.css';

function Project31Form() {
  const [sex, setSex] = useState(null);
  return (
    // prettier-ignore
    <div className="app-container">
      <CPNavBar />
      <div className="content">
        <div className='bodyE17'>
            <form action="#" className='formMain'>
              <div className='inputE17'>
              <label htmlFor="firstName" className='test1234'>FirstName: </label>
              <InputText required id="firstName" />
              </div>
              <br />
              <div className='inputE17'>
              <label htmlFor="lastName">LastName: </label>
              <InputText required id="lastName" />
              </div>
              <br />
              <div className='inputE17'>
              <label htmlFor="age">Age: </label>
              <InputNumber inputId="age" />
              </div>
              <br />
              <div className='inputE17'>
              <label htmlFor="sex">Male</label>
              <RadioButton inputId="sex1" name="sex" value="m" onChange={(e) => setSex(e.value)} checked={sex === 'm'} />
              <label htmlFor="sex">Female</label>
              <RadioButton inputId="sex2" name="sex" value="f" onChange={(e) => setSex(e.value)} checked={sex === 'f'}/>
              </div>
              <br />
              <Button label="Hello Click Me Now" className="p-button-success" />
            </form>
          </div>
        </div>
      </div>
  );
}

export default Project31Form;
