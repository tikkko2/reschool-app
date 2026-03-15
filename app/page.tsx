import StudentCard from "@/components/StudentCard";

export default function Home() {
  return (
    <>
      <StudentCard name="John Doe" grade={90} isOnline={true} />
    </>
  );
}
