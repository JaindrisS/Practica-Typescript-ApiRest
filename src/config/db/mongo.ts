import { connect } from "mongoose";

const dbConnect = async (): Promise<void> => {
  const dbUri = <string>process.env.LOCAL_DATABASE_URI;
  await connect(dbUri);
  console.log("Connected database");
};

export { dbConnect };
