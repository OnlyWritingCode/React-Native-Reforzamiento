const SumaString = (a: number, b: number): string => {
  return `${a + b}`;
};

export const BasicFunctions = () => {
  return (
    <>
      <h3>Functions</h3>
      <span>El resultado en string es = {SumaString(2, 8)}</span>
    </>
  );
};
