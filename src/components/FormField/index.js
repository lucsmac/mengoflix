import React from 'react'

const FormField = ({ textarea, children, id, value, type, onChange }) => {
  return (
    <div>
      <label>
        {children}
        {textarea ? (
          <textarea id={id} value={value} type={type} onChange={onChange} />
        ) : (
            <input id={id} value={value} type={type} onChange={onChange} />
          )}
      </label>
    </div>
  )
}

export default FormField
