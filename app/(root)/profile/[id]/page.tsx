import { getUserInfo } from "@/lib/actions/user.action";
import { URLProps } from "@/types";
import React from "react";

const ProfilePage = async ({ params, searchParams }: URLProps) => {
  const userInfo = await getUserInfo({ userId: params.id });
  return <div>{params.id}</div>;
};

export default ProfilePage;
