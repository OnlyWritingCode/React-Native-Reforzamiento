export const BasicTypes = () => {
  const name: string = "Fernando";
  const age: number = 38;
  const isActive: boolean = false;

  const powers: string[] = ["valor", "Datazo", "Astro"];

  return (
    <>
      <h3>Basic Types</h3>
      {name} - {age} - {isActive ? "Active" : "No Active"}
      <p>{powers.join(", ")}</p>
    </>
  );
};
