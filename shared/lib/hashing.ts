import bcrypt from "bcrypt";

const hashing = (value: string) => {
  return bcrypt.hash(value, 10);
};

export default hashing;
