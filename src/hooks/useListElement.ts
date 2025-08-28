import { useState } from 'react'

const useListElement = () => {
  
  const [isHovered, setHovered] = useState(false);

  const hover = () => setHovered(!isHovered);

  return {
    isHovered,
    hover
  }
}

export default useListElement