import React from 'react'
import { angleToRadians } from '../utils/angle'

const ThreeScene = () => {
  return (
    //  Ball
      <mesh>
          <sphereGeometry args={[1,32,32] } />
          <meshStandardMaterial color='#ffffff' />


          {/* ambient light */}
          <ambientLight args={ ['#ffffff',1]} />
    </mesh>
  )
}

export default ThreeScene