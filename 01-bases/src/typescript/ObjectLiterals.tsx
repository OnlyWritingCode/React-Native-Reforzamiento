interface Predator {
  age: number;
  firstName: string;
  lastName: string;
  address: Address;
}

interface Address {
  country: string;
  house: number;
  street?: string;
}
export const ObjectLiterals = () => {
  const predator: Predator = {
    age: 250,
    firstName: "Human",
    lastName: "Killer",
    address: {
      country: "Celerion 345",
      house: 12323423,
    },
  };

  return (
    <>
      <h3>Objetos Literales</h3>

      <pre>{JSON.stringify(predator, null, 2)}</pre>
    </>
  );
};
