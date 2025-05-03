"use client";
import ProfileComponent from "@/components/ProfileComponent";

export default function Page() {
  const user = {
    username: "John Doe",
    email: "john.doe@example.com",
    history: ["react basics", "tailwind tutorial"],
  };

  return (
    <ProfileComponent
      username={user.username}
      email={user.email}
      history={user.history}
    />
  );
}
