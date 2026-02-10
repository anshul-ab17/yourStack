import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const users: any[] = []; 

export const signup = async (data: any) => {
  const hashedPassword = await bcrypt.hash(data.password, 10);

  const user = {
    id: crypto.randomUUID(),
    email: data.email,
    password: hashedPassword,
  };

  users.push(user);

  return { id: user.id, email: user.email };
};

export const signin = async (data: any) => {
  const user = users.find(u => u.email === data.email);
  if (!user) throw new Error("User not found");

  const valid = await bcrypt.compare(data.password, user.password);
  if (!valid) throw new Error("Invalid credentials");

  const token = jwt.sign(
    { userId: user.id },
    "supersecret",
    { expiresIn: "1h" }
  );

  return token;
};
