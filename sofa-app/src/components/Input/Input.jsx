import React from "react";

export class Input extends React.Component {
    render() {
      const { value, placeholder, onChange } = this.props
  
      return (
        <input
          type="text"
          placeholder={placeholder}
          onChange={event => {
            onChange(event.currentTarget.value)
          }}
        />
      )
    }
  }