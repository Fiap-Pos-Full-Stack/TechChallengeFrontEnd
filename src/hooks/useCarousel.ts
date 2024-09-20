import { useState, useEffect, useCallback } from 'react';

function useCarousel(carouselLength:number, initialItem:number =0) {
    const [activeItem, setActiveItem] = useState<number>(initialItem);

    const prev = useCallback(()=> setActiveItem(prev=>prev > 0 ? prev-1 : prev),[])
    const next = useCallback(()=> setActiveItem(prev=>prev < carouselLength-1  ? prev+1 : prev),[carouselLength])

  return [activeItem, prev, next] as const;
}
export default useCarousel;