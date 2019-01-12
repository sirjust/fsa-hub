import React from 'react';
import Visibility from '@material-ui/icons/Visibility';
import { Link } from "react-router-dom";

const styles = {
  button: {
    fontSize: 48,
    position: 'absolute',
    left: 15,
    bottom: 15,
    color: '#3700B3'
  }
}

export default () => {
  return (
    <Link to={`/resource/process`}>
      <Visibility className='material-icons' style={styles.button} />
    </Link>
  )
}