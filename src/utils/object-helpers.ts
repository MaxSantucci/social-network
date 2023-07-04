// export const updateInObjectInArray = (items: any, itemId: number, objPropName: number, newObjProps: any) => {
//    return items.map(el => {
//       if (el[objPropName] === itemId) {
//          return {...el, ...newObjProps}
//       }
//       return el
//    })
// }

export const updateInObjectInArray = <T extends Record<string, any>>(
   items: T[],
   itemId: number,
   objPropName: keyof T,
   newObjProps: Partial<T>
): T[] => {
   return items.map((el) => {
      if (el[objPropName] === itemId) {
         return { ...el, ...newObjProps };
      }
      return el;
   });
};